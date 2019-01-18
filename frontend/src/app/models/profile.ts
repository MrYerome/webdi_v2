export class Profile {
  public static fromJson(json: Object): Profile {
    return new Profile(
      json['id'],
      json['name'],
      json['firstName'],
      json['email'],
      json['active'],
      json['createdDate'],
      json['updatedDate'],
      json['insee_Cities'],
      json['specAlim'],
    );
  }

  constructor(public id: number,
              public name: string,
              public firstName: string,
              public email: string,
              public active: number,
              public createdDate: string,
              public updatedDate: null,
              public insee_Cities: string,
              public specAlim: string,
  ) {
  }


}
