<?php

namespace App\Http\Controllers\Api\V1;

use App\Mail\ResetPasswordMail;
use App\Models\Users;
use Carbon\Carbon;
use Dingo\Api\Http\Request;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ChangePasswordRequest;

use Symfony\Component\HttpFoundation\Response;

class PasswordController extends Controller
{

    use Helpers;

//    use ResetsPasswords;

    /**
  fonctions pour mettre à jour le password
     */
    public function process(ChangePasswordRequest $request)
    {
        return $this->getPasswordResetTableRow($request)->count()> 0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    private function getPasswordResetTableRow($request)
    {
        return DB::table('password_resets')->where(['email' => $request->email, 'token' => $request->resetToken]);
    }

    private function tokenNotFoundResponse()
    {
        return response()->json(['error' => 'Token ou Email est incorrect'], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword($request)
    {
        $user = Users::where('email', $request->email)->first();
        $user->update(['password'=>md5($request->password)]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json(['data'=>'Password Successfully Changed'],Response::HTTP_CREATED);
    }


    /**
Fonctions pour vérifier si l'e-mail existe et le cas échéant, envoyer un mail avec un token
     */
    public function sendEmail(Request $request)
    {
        if (!$this->validateEmail($request->email)) {
            return $this->failedResponse();
        }
        $this->send($request->email);
        return $this->successResponse();
    }

    public function send($email)
    {
        $token = $this->createToken($email);$token = $this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }

    public function validateEmail($email)
    {
        return !!Users::where('email', $email)->first();
    }

    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->where('email', $email)->first();
        if ($oldToken) {
            return $oldToken->token;
        }
        $token = str_random(60);
        $this->saveToken($token, $email);
    }

    public function saveToken($token, $email)
    {
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }

    public function successResponse()
    {
        return response()->json([
            'data' => 'Un nouveau mot de passe a été envoyé. Vérifiez vos mails.'
        ], Response::HTTP_OK);
    }

    public function failedResponse()
    {
        return response()->json([
            'error' => 'Le mail n\'a pas été trouvé'
        ], Response::HTTP_NOT_FOUND);
    }

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
}
