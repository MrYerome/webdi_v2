export class Diner {
  public static fromJson(json: Object): Diner {
    return new Diner(
      json['id'],
      json['title'],
      json['description'],
      json['date'],
        json['price'],
        json['img'],
        json['maxMembers'],
      json['id_Places'],
      json['id_Themes'],
      json['id_Organisator'],
      json['place'],
      json['theme'],
      json['user'],
      json['usersdiners'],
      json['city'],
    );
  }

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: string,
    public price: number,
    public img: string,
    public maxMembers: number,
    public id_Places: number,
    public id_Themes: number,
    public id_Organisator: number,
    public place: {
      'id': number,
      'name': number,
      'numberStreet': number,
      'nameStreet': string,
      'maxCapacity': number,
      'insee_Cities': string,
      'id_Contacts': number
    },
    public theme: {
      'id': number,
      'label': string
    },
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
    public usersdiners: [
      {
        'id_Diners': number,
        'id_Users': number,
        'rate': number,
        'comment': string,
        'nbPlaces': number
      }
      ],
    public city: {
      'nom_reel': string
    }
  ) {
  }
}
