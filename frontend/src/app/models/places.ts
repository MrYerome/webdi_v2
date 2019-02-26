export class Places {
    public static fromJson(json: Object): Places {
        return new Places(
            json['id'],
            json['name'],
            json['numberStreet'],
            json['maxCapacity'],
            json['insee_Cities'],
            json['id_Contacts'],
        );
    }

    constructor(
          public id : number,
          public name : number,
          public numberStreet : number,
          public maxCapacity: number,
          public insee_Cities: string,
          public id_Contacts: number
    ) {
    }
}
