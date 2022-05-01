import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  Pagination,
  PaginationArgs,
  PaginationSortBy,
  SortDirection,
} from 'src/pagination/dto/pagination.dto';
import { Article } from '../models/article.model';

@InputType()
export class ArticlesPaginationSortBy extends PaginationSortBy {
  @Field(() => SortDirection, { nullable: true })
  title?: SortDirection;
}

@ArgsType()
export class ArticlesPaginationArgs extends PaginationArgs {
  @Field(() => ArticlesPaginationSortBy, { nullable: true })
  sortBy?: ArticlesPaginationSortBy;
}

@ObjectType()
export class ArticlesPagination extends Pagination {
  @Field(() => [Article])
  nodes: Article[];
}
