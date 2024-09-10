import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './models';
import { CreateUserDto } from './dto/user.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() user: CreateUserDto,
  ): Promise<{ id: number; login: string }> {
    return this.userService.createUser(user);
  }

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  async getUserById(
    @Param('id') userId: number,
  ): Promise<{ id: number; login: string }> {
    return this.userService.getUserById(userId);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: number): Promise<UserModel> {
    return this.userService.deleteUserById(id);
  }
}
