import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from '../command/get-users.query';
import { PrismaService } from 'src/database/prisma/services';

@QueryHandler(GetUsersQuery)
export class GetUserHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetUsersQuery): Promise<any> {
    return await this.prisma.user.findUnique({ where: { id: query.userId } })
  }
}
