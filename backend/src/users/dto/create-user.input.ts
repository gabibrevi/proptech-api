import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  MinLength,
  Matches,
} from 'class-validator';
import { Role } from '@prisma/client';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @Field(() => Role)
  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;
}
