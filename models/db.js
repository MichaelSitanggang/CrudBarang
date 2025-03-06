import { Sequelize } from "sequelize";
const db = new Sequelize("Barang","root","",{
    host:"localhost",
    dialect : "mysql",
    timezone : "+07:00"
});

export {db};