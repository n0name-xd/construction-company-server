import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'src/user/models';

@Module({
  providers: [AuthService, UserService],
  controllers: [AuthController],
  imports: [SequelizeModule.forFeature([UserModel]), JwtModule],
})
export class AuthModule {}
