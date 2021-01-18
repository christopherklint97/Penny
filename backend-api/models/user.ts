import sequelize from './db';
import { Model, DataTypes } from 'sequelize';

/** Database model and related functions for users. */

export default class User extends Model {
  public facebookId: string;
  public name: string;
  public profileImg: string;
}

User.init(
  {
    // Model attributes are defined here
    facebookId: { type: DataTypes.STRING, primaryKey: true, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
    profileImg: { type: DataTypes.STRING, allowNull: false },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'users',
  },
);
