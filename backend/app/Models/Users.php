<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $login
 * @property string $password
 * @property int $id_UserTypes
 * @property int $id_Profiles
 * @property Profile $profile
 * @property Usertypes $usertypes
 * @property Diner[] $diners
 * @property Message[] $messages
 * @property Usersdiner[] $usersdiners
 */
class Users extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['login', 'password', 'id_UserTypes', 'id_Profiles'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function profile()
    {
        return $this->belongsTo('App\Profile', 'id_Profiles');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function usertypes()
    {
        return $this->belongsTo('App\Models\Usertypes', 'id_UserTypes');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function diners()
    {
        return $this->hasMany('App\Diner', 'id_Organisator');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function messages()
    {
        return $this->hasMany('App\Message', 'id_Users');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function usersdiners()
    {
        return $this->hasMany('App\Usersdiner', 'id_Users');
    }
}
