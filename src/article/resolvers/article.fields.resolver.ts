import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from 'src/pagination/dto/pagination.dto';
import { User } from 'src/user/models/user.model';
import { UserService } from 'src/user/user.service';
import { ArticleService } from '../article.service';
import { ArticleCommentsPagination } from '../dto/article-comments-pagination.dto';
import { Article } from '../models/article.model';

@Resolver(Article)
export class ArticleFieldsResolver {
  constructor(
    private userService: UserService,
    private articleService: ArticleService,
  ) {}

  @ResolveField(() => User, { nullable: true })
  async author(@Parent() article: Article) {
    if (!article.authorId) {
      return null;
    }
    try {
      return await this.userService.userGetById(article.authorId);
    } catch (e) {
      return null;
    }
  }

  @ResolveField(() => ArticleCommentsPagination)
  async comments(@Parent() article: Article, @Args() args: PaginationArgs) {
    return await this.articleService.articleCommentsPagination(
      article.id,
      args,
    );
  }
}
