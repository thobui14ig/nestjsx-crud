import { IsBoolean, IsEmail, IsNotEmpty, Length, Validate } from 'class-validator'
import { Column } from 'typeorm'


export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()

  email: string


  @Column()
  name: string

}