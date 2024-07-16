import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../queries/command/create-users.command';
import { GetUsersQuery } from '../queries/command/get-users.query';

@Controller('user')
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  async createUser(@Body() body: { email: string; fullName: string }) {
    await this.commandBus.execute(
      new CreateUserCommand(body.fullName, body.email),
    );
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.queryBus.execute(new GetUsersQuery(id));
  }
}
