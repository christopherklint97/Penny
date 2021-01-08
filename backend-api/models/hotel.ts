import sequelize from './db';
import { Model, DataTypes } from 'sequelize';

/** Database model and related functions for hotels. */

export default class Hotel extends Model {
  public id: number;
  public city: string;
  public startDate: string;
  public endDate: string;
  public totalPrice: number;
  public currency: string;
}

Hotel.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    city: {
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
    modelName: 'Hotel', // We need to choose the model name
  },
);
