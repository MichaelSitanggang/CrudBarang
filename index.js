import express from "express";
import {
    FindAllBarang,
    FindBarangById,
    CreateBarang,
    UpdateBarang,
    DeleteBarang
} from "./controllers/barangcontrol.js"
import {
    Register,
    Login
} from "./controllers/usercontrol.js"
import session from "express-session";
import AuthentikasiJwt from './middlewares/jwt.js'
const app = express()

//parsing req.body jsonnya 
// middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 3600000
    }
}))


app.post("/daftar", Register)
app.post("/login", Login)

app.get("/barang",AuthentikasiJwt,FindAllBarang)
app.get("/barang/:id",AuthentikasiJwt,FindBarangById)
app.post("/barang", AuthentikasiJwt,CreateBarang)
app.put("/barang/:id", AuthentikasiJwt,UpdateBarang)
app.delete("/barang/:id", AuthentikasiJwt,DeleteBarang)


app.listen(3001, () => {
    console.log(`Server started on port`);
});

// Pahami konsep sequilize nya juga dan middlewar
// pakai sequilize dan migrasi databases // udah
// besok buat crud dan login pakai jwt  //crud udah 
