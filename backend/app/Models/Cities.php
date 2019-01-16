<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $departement
 * @property string $slug
 * @property string $nom
 * @property string $nom_simple
 * @property string $nom_reel
 * @property string $nom_soundex
 * @property string $nom_metaphone
 * @property string $code_postal
 * @property string $commune
 * @property string $insee
 * @property integer $arrondissement
 * @property string $canton
 * @property float $longitude_deg
 * @property float $latitude_deg
 * @property Places[] $places
 * @property Profiles[] $profiles
 */
class Cities extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['departement', 'slug', 'nom', 'nom_simple', 'nom_reel', 'nom_soundex', 'nom_metaphone', 'code_postal', 'commune', 'insee', 'arrondissement', 'canton', 'longitude_deg', 'latitude_deg'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function places()
    {
        return $this->hasMany('App\Models\Places', 'insee_Cities', 'insee');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function profiles()
    {
        return $this->hasMany('App\Models\Profiles', 'insee_Cities', 'insee');
    }
}
