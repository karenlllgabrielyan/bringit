import { Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  uuid?: string;
  name: string;
  age: number;
  email: string;
  posts?: Prisma.PostCreateNestedManyWithoutUserInput;
}
