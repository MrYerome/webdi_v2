<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $date
 * @property float $price
 * @property string $img
 * @property int $is_published
 * @property string $created_at
 * @property string $updated_at
 * @property string $deleted_at
 * @property int $maxMembers
 * @property int $id_Places
 * @property int $id_Themes
 * @property int $id_Organisator
 * @property Places $place
 * @property Themes $theme
 * @property Users $users
 * @property Messages[] $messages
 * @property Usersdiners[] $usersdiners
 */
class Diners extends Model
{
    use SoftDeletes;
    use \Znck\Eloquent\Traits\BelongsToThrough;
    /**
     * @var array
     */
    protected $fillable = ['title', 'description', 'date', 'price', 'img', 'created_at', 'updated_at', 'deleted_at', 'maxMembers', 'id_Places', 'id_Themes', 'id_Organisator', 'is_published'];
    protected $date = ['deleted_at'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function place()
    {
        return $this->belongsTo('App\Models\Places', 'id_Places');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function theme()
    {
        return $this->belongsTo('App\Models\Themes', 'id_Themes');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\Users', 'id_Organisator');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function messages()
    {
        return $this->hasMany('App\Models\Messages', 'id_Diners');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function usersdiners()
    {
        return $this->hasMany('App\Models\Usersdiners', 'id_Diners');
    }

    public function city()
    {
        return $this->belongsToThrough(
            'App\Models\Cities',
            'App\Models\Places',
            null,
            '',
            ['App\Models\Cities' => 'id_Cities', 'App\Models\Places' => "id_Places"]);
    }


}
