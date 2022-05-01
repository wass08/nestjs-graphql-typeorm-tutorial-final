import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthLoginOutput {
  @Field(() => String)
  accessToken: string;
}
