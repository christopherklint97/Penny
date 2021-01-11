import sequelize from './db';
import { Model, DataTypes, HasMany } from 'sequelize';
import User from './user';

/** Database model and related functions for cities. */

export default class City extends Model {
  public id: number;
  public name: string;
  public lat: number;
  public lng: number;
  public hasMany: HasMany;
}

City.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lng: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'City', // We need to choose the model name
  },
);

// Setup a One-to-Many relationship from User and City
User.hasMany(City);
