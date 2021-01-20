import sequelize from './db';
import { Model, DataTypes, BelongsToMany } from 'sequelize';
import Trip from './trip';

/** Database model and related functions for places. */

export default class Place extends Model {
  public id: string;
  public name: string;
  public place_id: string;
  public photo: string;
  public lat: number;
  public lng: number;
  public belongsToMany: BelongsToMany;
}

Place.init(
  {
    // Model attributes are defined here
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    place_id: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false },
    lat: { type: DataTypes.FLOAT, allowNull: false },
    lng: { type: DataTypes.FLOAT, allowNull: false },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Place', // We need to choose the model name
    tableName: 'places',
  },
);

// Setup a One-to-Many relationship for Trip to Place
Trip.hasMany(Place, {
  as: 'places',
  onDelete: 'CASCADE',
  sourceKey: 'id',
  foreignKey: 'tripId',
});
