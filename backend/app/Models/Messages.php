<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $content
 * @property string $created_at
 * @property string $updated_at
 * @property string $deleted_at
 * @property int $id_Users
 * @property int $id_Diners
 * @property int $warning
 * @property Diner $diner
 * @property User $user
 */
class Messages extends Model
{

    /**
     * @var array
     */
    protected $fillable = ['content', 'created_at', 'updated_at', 'deleted_at', 'id_Users', 'id_Diners', 'warning'];

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
}
