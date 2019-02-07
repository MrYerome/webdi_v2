<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $email
 * @property string $token
 * @property string $created_at
 */
class Password_resets extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['email', 'token', 'created_at'];

}
