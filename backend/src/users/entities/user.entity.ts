import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field(() => Role)
  role: Role;
}
