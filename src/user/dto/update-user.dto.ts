import { IsBoolean, IsNotEmpty, IsOptional, Length, Validate } from 'class-validator'


export class UpdateUserDto {


  @IsOptional()
  email: string


}
