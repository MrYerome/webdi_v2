<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $date
 * @property float $price
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
    /**
     * @var array
     */
    protected $fillable = ['title', 'description', 'date', 'price', 'created_at', 'updated_at', 'deleted_at', 'maxMembers', 'id_Places', 'id_Themes', 'id_Organisator'];
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


    /**
     *
     */
    public function city()
    {

        return $this->hasManyThrough('App\Models\Cities', 'App\Models\Places', "insee_Cities", "insee");

    }


    public function hasManyThrough($related, $through, $firstKey = null, $secondKey = null)
    {
        $through = new $through;

        $firstKey = $firstKey ?: $this->getForeignKey();

        $secondKey = $secondKey ?: $through->getForeignKey();

        return new HasManyThrough(with(new $related)->newQuery(), $this, $through, $firstKey, $secondKey);
    }
}
