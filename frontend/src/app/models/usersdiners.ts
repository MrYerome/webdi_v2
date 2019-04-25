export class Usersdiners {
    public static fromJson(json: Object): Usersdiners {
        return new Usersdiners(
            json['id_Users'],
            json['id_Diners'],
            json['rate'],
            json['comment'],
            json['nbPlaces'],
            json['user'],
            json['diner'],
        );
    }

    constructor(
        public id_Users: number,
        public id_Diners: number,
        public rate: number,
        public comment: string,
        public nbPlaces: number,
        public user: {
            'id': number,
            'login': string,
            'name': string,
            'firstName': string,
            'email': string,
            'active': number,
            'insee_Cities': string,
            'specAlim': string
            'id_UserTypes': number
        },
        public diner: [{
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
            'id_Organisator': number,
            'is_published': number,
        }]
    ) {
    }
}
