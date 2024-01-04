export interface User {
  avatar: File | null;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  email: string;
  id?: number;
  phone: string;
  role?: string;
  city_of_residence: string;
}
