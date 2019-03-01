<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $login
 * @property string $password
 * @property string $name
 * @property string $firstName
 * @property string $email
 * @property boolean $active
 * @property string $created_at
 * @property string $updated_at
 * @property int $id_Cities
 * @property string $specAlim
 * @property int $id_UserTypes
 * @property Cities $city
 * @property Usertypes $usertypes
 * @property Diners[] $diners
 * @property Messages[] $messages
 * @property Usersdiners[] $usersdiners
 * @property Themes[] $themes
 */
class Users extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['login', 'name', 'firstName', 'email', 'active', 'created_at', 'updated_at', 'id_Cities', 'specAlim', 'id_UserTypes'];
    protected  $hidden = ['password'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function cities()
    {
        return $this->belongsTo('App\Models\Cities', 'id_Cities', 'id');
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function themes()
    {
        return $this->belongsToMany('App\Models\Themes', 'usersthemes', 'id_Users', 'id_Themes');
    }
}
