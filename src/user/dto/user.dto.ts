import { IsString } from 'class-validator';

export interface User {
  login: string;
  password: string;
  email: string;
  phone: string;
}

export class CreateUserDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}
