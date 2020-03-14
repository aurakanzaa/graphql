export default (sequelize, DataTypes) => {
    const Matkul = sequelize.define('matkul', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        matkul: DataTypes.STRING,
    }, {
        freezeTableName: true,
    });

    Matkul.associate = (models) => {
        Matkul.belongsTo(models.mahasiswa);
    };

    return Matkul;
};