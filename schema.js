export default `
  type Mahasiswa {
    id: ID!
    nama: String!
    matkuls:[Matkul!]!
    pembimbings:[Pembimbing!]!
  }

  type Matkul {
    id: ID!
    matkul: String!
    mahasiswa: Mahasiswa
  }

  type Pembimbing {
    id: ID!
    pembimbing: String!
    mahasiswa: Mahasiswa
  }

  type Query {
    mahasiswas: [Mahasiswa]
    mahasiswa(id: ID!): Mahasiswa

    matkuls: [Matkul]
    matkul(id: ID!): Matkul

    pembimbings: [Pembimbing]
    pembimbing(id: ID!): Pembimbing

  }

  type Mutation {
    createMahasiswa(nama: String!, matkulId: ID!, pembimbingId: ID!): Mahasiswa!
    updateMahasiswa(id: ID!, name: String, matkulId: ID!, pembimbingId: ID!): Mahasiswa!
    deleteMahasiswa(id: ID!): Mahasiswa!

    createMatkul(matkul: String!, mahasiswaId:ID!): Matkul!
    updateMatkul(id: ID!, matkul: String, mahasiswaId:ID!): Matkul!
    deleteMatkul(id: ID!): Matkul!

    createPembimbing(pembimbing: String!, mahasiswaId:ID!): Pembimbing!
    updatePembimbing(id: ID!, pembimbing: String, mahasiswaId:ID!): Pembimbing!
    deletePembimbing(id: ID!): Pembimbing!

  }
`;