import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Comment } from '../models/comment.model';

@InputType()
export class CommentCreateInput {
  @Field(() => String)
  articleId: string;

  @Field(() => String)
  message: string;
}

@ObjectType()
export class CommentCreateOutput {
  @Field(() => Comment)
  comment: Comment;
}
