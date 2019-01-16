<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $content
 * @property string $createdDate
 * @property string $updatedDate
 * @property string $deletedDate
 * @property int $id_Users
 * @property int $id_Diners
 * @property Diner $diner
 * @property User $user
 */
class Messages extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['content', 'createdDate', 'updatedDate', 'deletedDate', 'id_Users', 'id_Diners'];

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
