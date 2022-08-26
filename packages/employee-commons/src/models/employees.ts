import { Table, Model, Column } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table
export default class Employee extends Model<
  InferAttributes<Employee>,
  InferCreationAttributes<Employee>
> {
  @Column({ allowNull: false })
  public title!: string;

  @Column({ allowNull: false })
  public technologies!: string;

  @Column({ allowNull: false })
  public budget!: string;

  @Column({ allowNull: false })
  public description!: string;

  @Column({ allowNull: false })
  public contact_email!: string;

  @Column({ allowNull: false })
  public createdAt!: Date;

  @Column({ allowNull: false })
  public updatedAt!: Date;
}
