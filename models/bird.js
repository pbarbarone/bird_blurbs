'use strict';
module.exports = (sequelize, DataTypes) => {
  var bird = sequelize.define('bird', {
    comName: DataTypes.STRING,
    sciName: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    soundUrl: DataTypes.STRING,
    infoSnippet: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return bird;
};