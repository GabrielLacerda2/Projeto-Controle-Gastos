
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LancamentoSchema = new mongoose.Schema({
    tipo:{
        type: String,
    },
    categoria: {
        type: String,
    },
    valor: {
        type: Number,
    },
    descricao: {
        type: String,
    },
    data:{
        type: Date
    },
    repetir:{
        type: String
    },
    usuario: {
        type: String
    }
   
});

module.exports = mongoose.models.Lancamento || mongoose.model('Lancamento',LancamentoSchema);