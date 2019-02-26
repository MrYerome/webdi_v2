export class Themes {
  public static fromJson(json: Object): Themes {
    return new Themes(
      json['id'],
      json['label'],
    );
  }

  constructor(
    public id: number,
    public title: string,
    public diners : [
    {
      "id": number,
      "title": "Premier diner",
      "description": "Description",
      "date": "2019-06-30 00:00:00",
      "price": 39,
      "created_at": "2019-02-26 10:16:39",
      "updated_at": "2019-02-26 10:16:39",
      "deleted_at": null,
      "maxMembers": 40,
      "id_Places": 1,
      "id_Themes": 1,
      "id_Organisator": 19
    }
    ],

  ) {
  }
}
