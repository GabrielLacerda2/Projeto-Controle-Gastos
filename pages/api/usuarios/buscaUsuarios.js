import dbConnect from '../../../utils/dbConnect';
import Usuario from '../../../models/Usuario';

dbConnect();

export default async (req,res) => {
    const {method} = req;

    switch(method){
        case 'POST':
            try {
                const usuario = await Usuario.findOne({ $or: [{email: req.body.email }, { cpf: req.body.cpf }] });
                res.status(201).json({success:true,data:usuario});
             
            } catch (error) {
                res.status(400).json({success:false});
            }
        break;

    }
}