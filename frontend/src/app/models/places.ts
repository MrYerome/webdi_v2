export class Places {
    public static fromJson(json: Object): Places {
        return new Places(
            json['id'],
            json['name'],
            json['numberStreet'],
            json['nameStreet'],
            json['maxCapacity'],
            json['insee_Cities'],
            json['id_Contacts'],
            json['Contact'],
            json['city'],
            json['diners'],


        );
    }

    constructor(
        public id: number,
        public name: number,
        public numberStreet: number,
        public nameStreet: string,
        public maxCapacity: number,
        public insee_Cities: string,
        public id_Contacts: number,
        public contact: {
            'id': number,
            'Name': string,
            'tel': number,
            'email': string
        },

         public city: {
            'id': number,
            'departement': number,
            'slug': string,
            'nom': string,
            'nom_simple': string,
            'nom_reel': string,
            'nom_soundex': string,
            'nom_metaphone': string,
            'code_postal': string,
            'commune': number,
            'insee': number,
            'arrondissement': number,
            'canton': number,
            'longitude_deg': number,
            'latitude_deg': number
        },
        public diners: [{
            'id': number,
            'title': string,
            'description': string,
            'date': Date,
            'price': number,
            'created_at': Date,
            'updated_at': Date,
            'deleted_at': Date,
            'maxMembers': number,
            'id_Places': number,
            'id_Themes': number,
            'id_Organisator': number
        }]
    ) {
    }
}
