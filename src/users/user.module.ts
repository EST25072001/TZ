import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ type: DataType.NUMBER, unique: true, primaryKey: true })
  name: number;
  @Column({ type: DataType.STRING, allowNull: false })
  status: string;
  @Column({ type: DataType.STRING, allowNull: false })
  provider: string;
  @Column({ type: DataType.STRING, allowNull: false })
  sender: string;
  @Column({ type: DataType.STRING, allowNull: false })
  place: string;
}
