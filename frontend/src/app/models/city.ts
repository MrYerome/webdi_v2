export class City {
    public static fromJson(json: Object): City {
        return new City(
            json['id'],
            json['departement'],
            json['slug'],
            json['nom'],
            json['nom_simple'],
            json['nom_reel'],
            json['nom_soundex'],
            json['nom_metaphone'],
            json['code_postal'],
            json['commune'],
            json['insee'],
            json['arrondissement'],
            json['canton'],
            json['longitude_deg'],
            json['latitude_deg'],
        );
    }

    constructor(
           public id: number,
           public departement: number,
           public slug: string,
           public nom: string,
           public nom_simple: string,
           public nom_reel: string,
           public nom_soundex: string,
           public nom_metaphone: string,
           public code_postal: string,
           public commune: number,
           public insee: number,
           public arrondissement: number,
           public canton: number,
           public longitude_deg: number,
           public latitude_deg: number,
           public place: [{
               "id" : number,
               "name" : number,
               "numberStreet" : number,
               "nameStreet" : string,
               "maxCapacity": number,
               "insee_Cities": string,
               "id_Contacts": number
           }],
           public user: [{
               "id": number,
               "login": string,
               "name": string,
               "firstName": string,
               "email": string,
               "active": number,
               "insee_Cities": string,
               "specAlim": string
               "id_UserTypes": number
           }],

    ) {
    }
}
