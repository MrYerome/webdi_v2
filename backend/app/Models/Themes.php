<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $label
 * @property Diners[] $diners
 * @property Users[] $users
 */
class Themes extends Model
{

    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = ['label'];
    protected $date = ['deleted_at'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function diners()
    {
        return $this->hasMany('App\Models\Diners', 'id_Themes');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\Users', 'usersthemes', 'id_Themes', 'id_Users');
    }

    public function getUpdatedAtColumn() {
        return null;
    }

    public function getCreatedAtColumn() {
        return null;
    }
}
