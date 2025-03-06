import { Sequelize, DataTypes } from "sequelize";
import { db } from "./db.js";

const User = db.define('user', {
    username : DataTypes.STRING,
    password : DataTypes.STRING
});

(async() => {
    await db.sync();
})()

export default User



