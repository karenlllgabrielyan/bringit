import { Prisma } from '@prisma/client';

export class Post implements Prisma.PostCreateInput {
  uuid?: string;
  title: string;
  content: string;
  user: Prisma.UserCreateNestedOneWithoutPostsInput;
}
