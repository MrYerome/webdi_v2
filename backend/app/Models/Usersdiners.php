<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id_Diners
 * @property int $id_Users
 * @property int $rate
 * @property string $comment
 * @property int $nbPlaces
 * @property Diner $diner
 * @property User $user
 */
class Usersdiners extends Model
{
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = ['rate', 'comment', 'nbPlaces'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function diner()
    {
        return $this->belongsTo('App\Models\Diner', 'id_Diners');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id_Users');
    }

    public function getUpdatedAtColumn() {
        return null;
    }

    public function getCreatedAtColumn() {
        return null;
    }


}
