export class User {
  // id?: number;
  // login: string;
  // password: string;
  // id_UserTypes: number;
  // id_Profiles: number;
  // usertypes:
  //   {
  //     id: number;
  //     label: string
  //   };
  // profile:
  //   {
  //     id: number;
  //     name: string;
  //     firstName: string;
  //     email: string;
  //     active: number;
  //     createdDate: string;
  //     updatedDate: null;
  //     insee_Cities: string
  //   }


  public static fromJson(json: Object): User {
    return new User(
      json['id'],
      json['login'],
      json['password'],
      json['id_UserTypes'],
      json['usertypes'],
      json['profile'],
      json['insee_Cities'],
    );
  }

  constructor(public id: number,
              public login: string,
              public password: string,
              public id_UserTypes: number,
              public id_Profiles: number,
              public usertypes:
                {
                  id: number;
                  label: string
                },
              public profile:
                {
                  id: number;
                  name: string;
                  firstName: string;
                  email: string;
                  active: number;
                  createdDate: string;
                  updatedDate: null;
                  insee_Cities: string,
                  specAlim: string,

                },
             ) {
  }


}
