import sequelize from './db';
import { Model, DataTypes, HasMany } from 'sequelize';
import User from './user';

/** Database model and related functions for cities. */

export default class Trip extends Model {
  public id: number;
  public cityName: string;
  public cityId: string;
  public photo: string;
  public lat: number;
  public lng: number;
  public hasMany: HasMany;
}

Trip.init(
  {
    // Model attributes are defined here
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cityName: { type: DataTypes.STRING, allowNull: false },
    cityId: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false },
    lat: { type: DataTypes.FLOAT, allowNull: false },
    lng: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Trip', // We need to choose the model name
    tableName: 'trips',
  },
);

// Setup a One-to-Many relationship for User to Trip
User.hasMany(Trip, {
  as: 'trips',
  onDelete: 'CASCADE',
  sourceKey: 'facebookId',
  foreignKey: 'userId',
});
