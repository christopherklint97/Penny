import sequelize from './db';
import { Model, DataTypes } from 'sequelize';

/** Database model and related functions for users. */

export default class Flight extends Model {
  public id: number;
  public fromCity: string;
  public toCity: string;
  public departure: Date;
  public arrival: Date;
  public totalPrice: number;
  public currency: string;
}

Flight.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fromCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrival: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Flight', // We need to choose the model name
  },
);
