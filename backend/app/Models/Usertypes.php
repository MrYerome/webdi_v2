<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $label
 * @property Users[] $users
 */
class Usertypes extends Model
{
    use SoftDeletes;
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = ['label', 'deleted_at'];
    protected $date = ['deleted_at'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\Models\Users', 'id_UserTypes');
    }

    public function getUpdatedAtColumn() {
        return null;
    }

    public function getCreatedAtColumn() {
        return null;
    }
}
