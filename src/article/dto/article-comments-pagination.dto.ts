import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/models/comment.model';
import { Pagination } from 'src/pagination/dto/pagination.dto';

@ObjectType()
export class ArticleCommentsPagination extends Pagination {
  @Field(() => [Comment])
  nodes: Comment[];
}
