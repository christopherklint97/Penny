import sequelize from './db';
import { Model, DataTypes, BelongsToMany, HasMany, BelongsTo } from 'sequelize';
import User from './user';
import Trip from './trip';

/** Database model and related functions for groups. */

export default class Group extends Model {
  public id: number;
  public name: string;
  public createdAt: Date;
  public belongsToMany: BelongsToMany;
  public hasMany: HasMany;
  public belongsTo: BelongsTo;
}

Group.init(
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Group', // We need to choose the model name
  },
);

// User can have many groups (many-to-many relationship)
User.belongsToMany(Group, { through: 'Groups_Users' });

// Group can have many users (many-to-many relationship)
Group.belongsToMany(User, { through: 'Groups_Users' });

// Setup a One-to-Many relationship between Group and Trip
Group.hasMany(Trip);
Trip.belongsTo(Group);
