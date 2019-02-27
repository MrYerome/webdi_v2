export class User {
  public static fromJson(json: Object): User {
    return new User(
      json['id'],
      json['login'],
      json['password'],
      json['name'],
      json['firstName'],
      json['email'],
      json['active'],
      json['createdDate'],
      json['updatedDate'],
      json['id_UserTypes'],
      json['usertypes'],
      json['cities'],
      json['specAlim'],
    );
  }

  constructor(public id: number,
              public login: string,
              public password: string,
              public name: string,
              public firstName: string,
              public email: string,
              public active: number,
              public createdDate: string,
              public updatedDate: null,
              public id_UserTypes: number,
              public usertypes: {
                "id" : number,
                "label" : number,
              },
              public cities: {
                "id" : number,
                "departement" : number,
                "nom_reel" : string,
              },
              public specAlim: string,

  ) {
  }
}
