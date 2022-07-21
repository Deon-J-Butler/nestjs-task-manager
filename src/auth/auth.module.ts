import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { UsersRepository } from './users.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UsersRepository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
