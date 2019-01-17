<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $Name
 * @property int $tel
 * @property string $email
 * @property Places[] $places
 */
class Contacts extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['Name', 'tel', 'email'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function places()
    {
        return $this->hasMany('App\Models\Places', 'id_Contacts');
    }
}