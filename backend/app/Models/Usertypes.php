<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $label
 * @property Users[] $users
 */
class Usertypes extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['label'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\Models\Users', 'id_UserTypes');
    }
}
