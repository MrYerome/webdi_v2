<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $email
 * @property string $token
 */

class Activation extends Model
{
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = ['email', 'token'];

    public function getCreatedAtColumn() {
        return null;
    }

}
