import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from 'src/article/article.module';
import { UserModule } from 'src/user/user.module';
import { CommentService } from './comment.service';
import { Comment } from './models/comment.model';
import { CommentMutationsResolver } from './resolvers/comment.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), UserModule, ArticleModule],
  providers: [CommentService, CommentMutationsResolver],
})
export class CommentModule {}
