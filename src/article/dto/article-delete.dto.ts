import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Article } from '../models/article.model';

@ObjectType()
export class ArticleDeleteOutput {
  @Field(() => ID)
  articleId: Article['id'];
}
