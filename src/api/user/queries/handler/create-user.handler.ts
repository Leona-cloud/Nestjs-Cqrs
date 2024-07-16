import { PrismaService } from 'src/database/prisma/services';
import { CreateUserCommand } from '../command/create-users.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateUserCommand): Promise<any> {
    return await this.prisma.user.create({
      data: {
        fullName: command.fullName,
        email: command.email,
      },
    });
  }
}
