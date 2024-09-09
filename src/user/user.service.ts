import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './models';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}

  async createUser(
    userDto: CreateUserDto,
  ): Promise<{ id: number; login: string }> {
    const user = await this.userModel.findOne({
      where: {
        login: userDto.login,
      },
    });

    if (user) {
      throw new ConflictException(
        `User with login ${userDto.login} already exists!`,
      );
    }

    const newUser = await this.userModel.create({
      ...userDto,
      password: await hash(userDto.password, 10),
    });

    const { id, login } = newUser;

    return {
      id,
      login,
    };
  }

  async findByLogin(login: string) {
    return await this.userModel.findOne({
      where: { login },
    });
  }

  async getAllUsers(): Promise<UserModel[]> {
    return this.userModel.findAll();
  }

  async getUserById(userId: number): Promise<{ id: number; login: string }> {
    const user = await this.userModel.findByPk(userId);

    const { id, login } = user;

    return {
      id,
      login,
    };
  }

  async deleteUserById(id: number): Promise<UserModel> {
    const user = await this.userModel.findByPk(id);

    await user.destroy();
    return user;
  }
}
