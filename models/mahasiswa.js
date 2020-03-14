export default (sequelize, DataTypes) => {
    const Mahasiswa = sequelize.define('mahasiswa', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama: DataTypes.STRING
    }, {
        freezeTableName: true,
    });

    Mahasiswa.associate = (models) => {
        Mahasiswa.hasMany(models.pembimbing);
    };

    Mahasiswa.associate = (models) => {
        Mahasiswa.hasMany(models.matkul);
    };

    return Mahasiswa;
};