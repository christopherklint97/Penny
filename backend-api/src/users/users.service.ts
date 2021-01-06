import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';

interface Provider {
  name: string;
  id: string;
}

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // find user based on googleId or facebookId, otherwise create the user
  async findOrCreateUser(
    data: Prisma.UserCreateInput,
    provider: Provider,
  ): Promise<User> {
    let user;

    // find user depending on if we are logging in with facebook or google
    if (provider.name === 'facebook') {
      user = await this.prisma.user.findFirst({
        where: { facebookId: provider.id },
      });
    } else {
      user = await this.prisma.user.findFirst({
        where: { googleId: provider.id },
      });
    }

    // if user, return. Othwerise create user
    if (user) {
      return user;
    } else if (provider.name === 'facebook') {
      data.facebookId = provider.id;
      return this.prisma.user.create({
        data,
      });
    } else {
      data.googleId = provider.id;
      return this.prisma.user.create({
        data,
      });
    }
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
