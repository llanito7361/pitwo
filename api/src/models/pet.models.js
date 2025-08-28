const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelizeInstance) => {
  sequelizeInstance.define("Pet", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    peso: {
      type: DataTypes.INTEGER, // edad en años
      allowNull: true,
    },
    altura: {
      type: DataTypes.FLOAT, // peso en kg
      allowNull: true,
    },
    temperamento: {
      type: DataTypes.TEXT, // descripción de la mascota
      allowNull: true,
    },
    criadoPara: {
      type: DataTypes.TEXT, // descripción de la mascota
      allowNull: true,
    },
    grupoDeRaza: {
      type: DataTypes.TEXT, // descripción de la mascota
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: { msg: "Debe ser una URL válida" },
      },
    },
    enabled: {
      type: DataTypes.BOOLEAN, // si la mascota está activa en el sistema
      defaultValue: true,
    },
  });
};
