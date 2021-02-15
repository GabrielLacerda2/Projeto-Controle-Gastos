import dbConnect from '../../../utils/dbConnect';
import Usuario from '../../../models/Usuario';
import Lancamento from '../../../models/Lancamento';

dbConnect();

export default async (req,res) => {
    const {
        query: {id},
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const lancamentos = await Lancamento.find({"usuario" : id});
                const usuario = await Usuario.findById(id);
                res.status(200).json({success:true,data:[lancamentos,usuario]});
            } catch (error) {
                res.status(400).json({success:false});
            }
        break;
    }
}
