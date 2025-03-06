import { db } from "./db.js";
import { Sequelize,DataTypes } from "sequelize";

const Barang = db.define('barang', {
    nama_barang : DataTypes.STRING,
    harga_barang : DataTypes.INTEGER,
    stok : DataTypes.INTEGER,
});

(async() => {
    await db.sync();
})()

export default Barang;

