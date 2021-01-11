import sequelize from './db';
import { Model, DataTypes, BelongsToMany } from 'sequelize';
import City from './city';

/** Database model and related functions for gplaces. */

export default class Place extends Model {
  public id: number;
  public name: string;
  public lat: number;
  public lng: number;
  public belongsToMany: BelongsToMany;
}

Place.init(
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
    modelName: 'Place', // We need to choose the model name
  },
);

// User can have many groups (many-to-many relationship)
City.belongsToMany(Place, { through: 'Cities_Places' });

// Group can have many users (many-to-many relationship)
Place.belongsToMany(City, { through: 'Cities_Places' });
