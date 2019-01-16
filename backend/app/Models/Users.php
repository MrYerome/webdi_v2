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
 * @property Diners[] $diners
 * @property Messages[] $messages
 * @property Usersdiners[] $usersdiners
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
        return $this->belongsTo('App\Models\Profiles', 'id_Profiles');
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
        return $this->hasMany('App\Models\Diners', 'id_Organisator');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function messages()
    {
        return $this->hasMany('App\Models\Messages', 'id_Users');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function usersdiners()
    {
        return $this->hasMany('App\Models\Usersdiners', 'id_Users');
    }
}
