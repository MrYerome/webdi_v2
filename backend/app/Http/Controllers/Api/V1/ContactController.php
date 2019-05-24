<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Contacts;
use App\Models\Users;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class ContactController extends Controller
{
    use Helpers;

    public function getContacts(){
        return Contacts::with('places')->get();
    }

    public function getOneContact($id){
        return Contacts::with('places')->find($id);
    }

    public function createContact(Request $request){
        $attribut = [];

        try{
            $attribut['Name'] = $request->Name;
            $attribut['tel'] = $request->tel;
            $attribut['email'] = $request->email;

            DB::beginTransaction();

            $contact = Contacts::create($attribut);

            DB::commit();

            return $contact;
        }catch (\PDOException $e){
            DB::rollBack();
            return $e;
        }
    }

    public function updateContact(Request $request){
        try{
            $contacts = new Contacts();
            // Vérification que user_id est passé
            if (!isset($request->user_id)){
                throw new \InvalidArgumentException("User_id manquant");
            }
            // Vérification que theme_id est passé
            if (!isset($request->contacts_id)){
                throw new \InvalidArgumentException("Le champ contacts_id est manquant");
            }
            $user = Users::find($request->user_id);
            // Vérification que user est admin
            if ($user->id_UserTypes != 1){
                throw new \InvalidArgumentException("Unauthorized");
            }

            $contacts = Contacts::find($request->contacts_id);

            $aAttributModifiable = ['Name', 'tel', 'email', 'deleted_at'];

            if (!isset($contacts->id)) {
                throw new ModelNotFoundException('Contacts not find');
            }

            DB::beginTransaction();

            foreach ($request->all() as $key => $value){
                if (in_array($key, $aAttributModifiable)){
                    $contacts->$key = $value;
                }
            }
            $contacts->save();

            DB::commit();
            return $this->api->get('contacts/getOneContact/' . $contacts->id);

        }catch (\InvalidArgumentException $e) {
            return $e->getMessage();
        }catch (\PDOException $e) {
            DB::rollBack();
            return $e->getMessage();
            //return $this->response->errorBadRequest();
        }catch (ModelNotFoundException $e){
            return $e->getMessage();
        }
    }

    public function deleteContact(Request $request){

        try{
            // Vérification que user_id est passé
            if (!isset($request->user_id)){
                throw new \InvalidArgumentException("user_id manquant");
            }

            // Vérification que theme_id est passé
            if (!isset($request->contacts_id)){
                throw new \InvalidArgumentException("contacts_id manquant");
            }
            $user = Users::find($request->user_id);
            // le user est admin
            if ($user->id_UserTypes != 1){
                throw new \InvalidArgumentException("Unauthorized");
            }

            DB::beginTransaction();
            if (Contacts::find($request->contacts_id) != null){
                Contacts::find($request->contacts_id)->delete();
            }

            DB::commit();
            return $this->response->accepted();

        }catch (\InvalidArgumentException $e){
            return $e->getMessage();
        }catch (\PDOException $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }
}
