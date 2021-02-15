
const mongoose = require('mongoose'); 

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor digite um nome']
    },
    email: {
        type: String,
        required: [true, 'Por favor digite um email']
    },
    cpf: {
        type: String,
    },
    senha:{
        type: String,
        required: [true, 'Por favor digite uma senha'],
        select: false,
    }
});

module.exports = mongoose.models.Usuario || mongoose.model('Usuario',UsuarioSchema);





