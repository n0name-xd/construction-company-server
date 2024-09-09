import { Column, Model, Table } from 'sequelize-typescript';
import { User } from '../dto/user.dto';

@Table({ tableName: 'User' })
export class UserModel extends Model<UserModel, User> {
  @Column
  login: string;

  @Column
  password: string;

  @Column({ allowNull: true })
  email: string;

  @Column({ allowNull: true })
  phone: string;
}
