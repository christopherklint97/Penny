import sequelize from './db';
import { Model, DataTypes, HasMany, BelongsTo } from 'sequelize';
import Flight from './flight';
import Hotel from './hotel';

/** Database model and related functions for trips. */

export default class Trip extends Model {
  public id: number;
  public name: string;
  public startDate: string;
  public endDate: string;
  public hasMany: HasMany;
  public belongsTo: BelongsTo;
}

Trip.init(
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
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Trip', // We need to choose the model name
  },
);

// Setup a One-to-Many relationship between Trip and Flight
Trip.hasMany(Flight);
Flight.belongsTo(Trip);

// Setup a One-to-Many relationship between Trip and Hotel
Trip.hasMany(Hotel);
Hotel.belongsTo(Trip);
