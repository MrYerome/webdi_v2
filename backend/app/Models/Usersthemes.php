<?php

namespace App\Models;

use App\Models\Themes;
use App\Models\Users;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id_Themes
 * @property int $id_Users
 * @property Themes $theme
 * @property Users $user
 */
class Usersthemes extends Model
{
    /**
     * @var array
     */
    protected $fillable = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function themes()
    {
        return $this->belongsTo('App\Models\Themes', 'id_Themes');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function users()
    {
        return $this->belongsTo('App\Models\Users', 'id_Users');
    }
}
