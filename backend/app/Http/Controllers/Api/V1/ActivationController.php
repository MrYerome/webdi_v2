<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Activation;
use App\Mail\SendMailAfterSignup;
use Dingo\Api\Http\Request;
use App\Models\Users;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ActivationController extends Controller
{
    public function sendMailAfterSignup(Request $request)
    {
        if (!$this->validateEmail($request->email)) {
            return $this->failedResponse();
        }
        $this->send($request->email);
        return $this->successResponse();
    }

    public function validateEmail($email)
    {
        return !!Users::where('email', $email)->first();
    }

    public function send($email)
    {

        $token = $this->createToken($email);
        Mail::to($email)->send(new SendMailAfterSignup($token));
    }

    public function createToken($email)
    {
        $oldToken = DB::table('activations')->where('email', $email)->first();
        if ($oldToken) {
            return $oldToken->token;
        }
        $token = str_random(60);
        $this->saveToken($token, $email);
    }

    public function saveToken($token, $email)
    {
        DB::table('activations')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }

    public function successResponse()
    {
        return response()->json([
            'data' => 'Un mail d\'activation vient de vous être envoyé..'
        ], Response::HTTP_OK);
    }

    public function failedResponse()
    {
        return response()->json([
            'error' => 'Le mail n\'a pas été trouvé'
        ], Response::HTTP_NOT_FOUND);
    }

    public function activation($token)
    {
        return $this->getActivationTableRow($token)->count() > 0 ? $this->activerCompte($token) : $this->tokenNotFoundResponse();
    }

    private function getActivationTableRow($token)
    {
        //return json_encode($token);
        return DB::table('activations')->where(['token' => $token]);
    }

    private function tokenNotFoundResponse()
    {
        return response()->json(['error' => 'Impossible de trouver le token d\'identification. Merci de contacter les administrateurs du site.'], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function activerCompte($token)
    {
        $ligneActivation = Activation::where('token', $token)->first();
        $user = Users::where('email', $ligneActivation->email)->first();
        $user->update(['active' => 1]);
        return response()->json(['data' => 'Compte correctement activé'], Response::HTTP_CREATED);
    }


}
