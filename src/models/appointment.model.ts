import {DataTypes, Model, Optional} from 'sequelize';

import sequelize from '../config/connection';

interface AppointmentAttributes {
  id: number;
  date: string;
  startTime: string;
  duration: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AppointmentCreationAttributes extends Optional<
  AppointmentAttributes,
  'id' | 'createdAt' | 'updatedAt'
> {}

class Appointment
  extends Model<AppointmentAttributes, AppointmentCreationAttributes>
  implements AppointmentAttributes
{
  declare id: number;
  declare date: string;
  declare startTime: string;
  declare duration: number;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'start_time',
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'appointments',
    modelName: 'Appointment',
    timestamps: true,

    indexes: [
      {
        unique: true,
        fields: ['date', 'start_time'],
      },
    ],
  },
);

export default Appointment;
