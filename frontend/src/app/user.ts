export class User {
  id?: number;
  login: string;
  password: string;
  id_UserTypes: number;
  id_Profiles: number;
  usertypes:
    {
      id: number;
      label: string
    };
  profile:
    {
      id: number;
      name: string;
      firstName: string;
      email: string;
      active: number;
      createdDate: string;
      updatedDate: null;
      insee_Cities: string
    }
}
