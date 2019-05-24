<?php

namespace App\Http\Controllers\Api\V1;



use App\Models\Contacts;
use App\Models\Places;
use App\Models\Users;
use Dingo\Api\Http\Request;
use Dingo\Api\Routing\Helpers;
use http\Exception\InvalidArgumentException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;


class PlacesController extends Controller
{
    use Helpers;

    /**
     * Récupération de tout les lieux
     * @return Places[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getPlaces(){
        return Places::with("contact", "city", "diners")->get();
    }

    /**
     * Récupération d'un lieu
     * @param $id
     * @return Places|Places[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function getPlace($id){
        return Places::with("contact", "city", "diners")->find($id);
    }

    /**
     * Création d'un diners
     * @param Request $request
     * @return \Exception|ModelNotFoundException|\PDOException|string
     */
    public function createPlace(Request $request){
        $attribut = [];

        try{

            $contact = Contacts::find($request->id_Contacts);

            if(!$contact){
                throw new ModelNotFoundException("Contact not found");
            }

            $attribut['name'] = $request->name;
            $attribut['numberStreet'] = $request->numberStreet;
            $attribut['nameStreet'] = $request->nameStreet;
            $attribut['maxCapacity'] = $request->maxCapacity;
            $attribut['id_Cities'] = $request->id_Cities;
            $attribut['id_Contacts'] = $request->id_Contacts;

            DB::beginTransaction();

            $place = Places::create($attribut);

            DB::commit();

            return $place;
        }catch (\PDOException $e){
            DB::rollBack();
            return $e;
        }catch (ModelNotFoundException $e){
            return $e->getMessage();
        }
    }

    /**
     * Mise a jour d'un lieu avec vérification des droits
     * @param Request $request
     * @return mixed|string
     */
    public function updatePlace(Request $request){
        try{

            if (!$request->place_id){
                throw new \InvalidArgumentException("place_id manquant");
            }
            if (!$request->user_id){
                throw new \InvalidArgumentException("user_id manquant");
            }

            $place = Places::find($request->place_id);

            if(!$place){
                throw new ModelNotFoundException("Place not found");
            }

            $user = Users::find($request->user_id);
            if ($user->id_UserTypes != 1){
                throw new \InvalidArgumentException("Unauthorized");
            }


            $toNotModify = ["city", "contact", "diners", "place_id"];

            DB::beginTransaction();

            foreach ($request->all() as $key => $value){
                if (!in_array($key, $toNotModify)){
                    $place->$key = $value;
                }
            }
            $place->save();
            DB::commit();

            return $this->api->get('places/getPlace/'.$place->id);

        }catch (\PDOException $e){
            DB::rollBack();
            return $e->getMessage();
        }catch (\InvalidArgumentException $e){
            return $e->getMessage();
        }catch (ModelNotFoundException $e){
            return $e->getMessage();
        }
    }

    /**
     * Suppression d'un lieu vace vérification des droits
     * @param Request $request
     */
    public function deletePlace(Request $request){
        try{

            if (!$request->place_id){
                throw new \InvalidArgumentException("place_id manquant");
            }
            if (!$request->user_id){
                throw new \InvalidArgumentException("user_id manquant");
            }

            $user = Users::find($request->user_id);
            if ($user->id_UserTypes != 1){
                throw new \InvalidArgumentException("Unauthorized");
            }

            $place = Places::find($request->place_id);
            if(!$place){
                throw new ModelNotFoundException("Place not found");
            }

            DB::beginTransaction();

            Places::find($request->place_id)->delete();

            DB::commit();
            return $this->response->accepted();


        }catch (\PDOException $e){
            DB::rollBack();
            return $e->getMessage();
        }catch (\InvalidArgumentException $e){
            return $e->getMessage();
        }catch (ModelNotFoundException $e){
            return $e->getMessage();
        }
    }
}
