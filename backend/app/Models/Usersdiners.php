<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use App\Models\hasCompositePrimaryKey;

/**
 * @property int $id_Diners
 * @property int $id_Users
 * @property int $rate
 * @property string $comment
 * @property int $nbPlaces
 * @property Diner $diner
 * @property User $user
 */
class Usersdiners extends hasCompositePrimaryKey
{
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = ['id_Diners', "id_Users", 'rate', 'comment', 'nbPlaces'];
    protected $primaryKey = ['id_Diners', 'id_Users'];
    public $incrementing = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function diner()
    {
        return $this->belongsTo('App\Models\Diners', 'id_Diners');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\Users', 'id_Users');
    }

    public function getUpdatedAtColumn() {
        return null;
    }

    public function getCreatedAtColumn() {
        return null;
    }


}
