export class Themes {
  public static fromJson(json: Object): Themes {
    return new Themes(
      json['id'],
      json['label'],
      json['diners'],
      json['users'],
    );
  }

  constructor(
    public id: number,
    public label: string,
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
    }],
    public users: [{
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
