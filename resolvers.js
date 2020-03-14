export default {
    Mahasiswa: {
        matkuls: (parent, args, context, info) => parent.getMatkuls(),
        pembimbings: (parent, args, context, info) => parent.getPembimbings()
    },
    
    Query: {
        //mahasiswa
        mahasiswas: (
            parent, args, {
                db
            }, info
        ) => db.mahasiswa.findAll(),
        mahasiswa: (parent, {
            id
        }, {
            db
        }, info) => db.mahasiswa.findByPk(id),
        //end mahasiswa
        //matkul
        matkuls: (
            parent, args, {
                db
            }, info
        ) => db.matkul.findAll(),
        matkul: (parent, {
            id
        }, {
            db
        }, info) => db.matkul.findByPk(id),
        //end matkul
        //pembimbing
        pembimbings: (
            parent, args, {
                db
            }, info
        ) => db.pembimbing.findAll(),
        pembimbing: (parent, {
            id
        }, {
            db
        }, info) => db.pembimbing.findByPk(id),
        //end pembimbing
    },
    Mutation: {
        //mahasiswa
        createMahasiswa: (parent, {
                nama,
                matkulId,
                pembimbingId
            }, {
                db
            }, info) =>
            db.mahasiswa.create({
                nama: nama,
                matkulId: matkulId,
                pembimbingId: pembimbingId
            }),
        updateMahasiswa: (parent, {
                id,
                nama,
                matkulId,
                pembimbingId
            }, {
                db
            }, info) =>
            db.mahasiswa.update({
                nama: nama,
                matkulId: matkulId,
                pembimbingId: pembimbingId
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                return db.mahasiswa.findByPk(id)
            }),
        deleteMahasiswa: (parent, {
                id
            }, {
                db
            }, info) =>
            db.mahasiswa.findByPk(id).then((result) => {
                return db.mahasiswa.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then((u) => {
                        return result
                    });
            }),
        //end mahasiswa

        //Matkul
        createMatkul: (parent, {
                matkul,
                mahasiswaId
            }, {
                db
            }, info) =>
            db.matkul.create({
                matkul: matkul,
                mahasiswaId: mahasiswaId
            }),
        updateMatkul: (parent, {
                id,
                matkul,
                mahasiswaId
            }, {
                db
            }, info) =>
            db.matkul.update({
                matkul: matkul,
                mahasiswaId: mahasiswaId
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                return db.matkul.findByPk(id)
            }),
        deleteMatkul: (parent, {
                id
            }, {
                db
            }, info) =>
            db.matkul.findByPk(id).then((result) => {
                return db.matkul.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then((u) => {
                        return result
                    });
            }),
        //end Matkul

        //Pembimbing
        createPembimbing: (parent, {
                pembimbing,
                mahasiswaId
            }, {
                db
            }, info) =>
            db.pembimbing.create({
                pembimbing: pembimbing,
                mahasiswaId: mahasiswaId
            }),
        updatePembimbing: (parent, {
                id,
                pembimbing,
                mahasiswaId
            }, {
                db
            }, info) =>
            db.pembimbing.update({
                pembimbing: pembimbing,
                mahasiswaId: mahasiswaId
            }, {
                where: {
                    id: id
                    
                }
            }).then(() => {
                return db.pembimbing.findByPk(id)
            }),
        deletePembimbing: (parent, {
                id
            }, {
                db
            }, info) =>
            db.pembimbing.findByPk(id).then((result) => {
                return db.pembimbing.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then((u) => {
                        return result
                    });
            }),
        //end Pembimbing

    }
};