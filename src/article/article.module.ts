import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/comment/models/comment.model';
import { UserModule } from 'src/user/user.module';
import { ArticleService } from './article.service';
import { Article } from './models/article.model';
import { ArticleFieldsResolver } from './resolvers/article.fields.resolver';
import { ArticleMutationsResolver } from './resolvers/article.mutations.resolver';
import { ArticleQueriesResolver } from './resolvers/article.queries.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Comment]), UserModule],
  providers: [
    ArticleService,
    ArticleMutationsResolver,
    ArticleQueriesResolver,
    ArticleFieldsResolver,
  ],
  exports: [ArticleService],
})
export class ArticleModule {}
