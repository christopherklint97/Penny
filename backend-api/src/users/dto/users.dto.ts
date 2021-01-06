export class CreateUserDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateUserDto extends CreateUserDto {}

export class ListAllEntities extends CreateUserDto {
  limit: string;
}
