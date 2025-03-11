import Barang from "../models/barang.js";

export const FindAllBarang = async (req,res) =>{
    Barang.findAll().then((barang) => {
        res.status(200).json({barang : barang});
    }).catch((err)=>{
        res.status(500).json({error : err});
    })
}

export const FindBarangById = async (req,res) => {
    try {
        const id = req.params.id
        const barang = await Barang.findOne({where : {id : id}})
        if(barang) {
            res.status(200).json({message : barang})
        }else{
            res.status(404).json({message : "Barang Tidak Ada"})
        }
    } catch (error) {
        res.status(500).json({message : "error"})
    }
}

export const CreateBarang = async (req,res) => {
    try {
        console.log(req.body)
        await Barang.create(req.body);
        res.status(201).json({message : "Barang Berhasil Ditambah"})
    } catch (error) {
        res.status(500).json({message : "Data Gagal Ditambah"})
    }
}

export const UpdateBarang = async (req,res) => {
    try {
        await Barang.update(req.body, {where : {id : req.params.id}})
        res.status(200).json({message : "Berhasil Diubah"})
    } catch (error) {
        res.status(500).json({message : "Gagal Diubah"})
    }
}

export const DeleteBarang = async (req,res) => {
    try {
        await Barang.destroy({where : {id : req.params.id}})
        res.status(200).json({message : "Berhasil Dihapus"})
    } catch (error) {
        res.status(500).json({message : "Gagal Dihapus"})
    }
}