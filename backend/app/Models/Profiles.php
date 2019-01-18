<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $firstName
 * @property string $email
 * @property boolean $active
 * @property string $created_at
 * @property string $updated_at
 * @property string $insee_Cities
 * @property string $specAlim
 * @property City $city
 * @property Themes[] $themes
 * @property Users[] $users
 */
class Profiles extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'firstName', 'email', 'active', 'created_at', 'updated_at', 'insee_Cities', 'specAlim'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function city()
    {
        return $this->belongsTo('App\Models\City', 'insee_Cities', 'insee');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function themes()
    {
        return $this->belongsToMany('App\Models\Themes', 'profilesthemes', 'id_Profiles', 'id_Themes');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\Models\Users', 'id_Profiles');
    }
}
