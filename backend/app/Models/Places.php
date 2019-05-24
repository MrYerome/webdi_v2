<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $name
 * @property int $numberStreet
 * @property string $nameStreet
 * @property int $maxCapacity
 * @property int $id_Cities
 * @property int $id_Contacts
 * @property Cities $city
 * @property Contacts $contact
 * @property Diners[] $diners
 */
class Places extends Model
{
    use SoftDeletes;
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = ['name', 'numberStreet', 'nameStreet', 'maxCapacity', 'id_Cities', 'id_Contacts'];
    protected  $dates = ['deleted_ad'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function city()
    {
        return $this->belongsTo('App\Models\Cities', 'id_Cities', 'insee');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function contact()
    {
        return $this->belongsTo('App\Models\Contacts', 'id_Contacts');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function diners()
    {
        return $this->hasMany('App\Models\Diners', 'id_Places');
    }

    public function getUpdatedAtColumn() {
        return null;
    }

    public function getCreatedAtColumn() {
        return null;
    }
}
