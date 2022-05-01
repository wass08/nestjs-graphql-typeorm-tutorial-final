import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/models/comment.model';
import { Node } from 'src/pagination/models/node.model';
import { User } from 'src/user/models/user.model';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
@ObjectType()
export class Article extends Node {
  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.articles)
  @JoinColumn()
  author: User;

  @RelationId((self: Article) => self.author)
  readonly authorId: User['id'];

  @OneToMany(() => Comment, (comment) => comment.article)
  @JoinColumn()
  comments: Comment;
}
