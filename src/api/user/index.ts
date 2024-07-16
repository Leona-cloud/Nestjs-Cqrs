import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { UserController } from "./controllers";
import { CreateUserHandler } from "./queries/handler/create-user.handler";
import { GetUserHandler } from "./queries/handler/get-users.handler";

@Module({
    imports: [CqrsModule],
    providers: [GetUserHandler, CreateUserHandler],
    controllers: [UserController],
    exports: []
})


export class UserModule {}