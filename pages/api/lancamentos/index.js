import dbConnect from '../../../utils/dbConnect';
import Lancamento from '../../../models/Lancamento';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const lancamentos = await Lancamento.find({});

                res.status(201).json({sucess:true, data: lancamentos})
            } catch (error) {
                res.status(400).json({sucess:false});
            }          
            break;
        case 'POST':
            try {
                const lancamentos = await Lancamento.create(req.body);

                res.status(201).json({sucess:true, data: lancamentos})
            } catch (error) {
                res.status(400).json({sucess:false});
            }  
            break;
        default: 
        res.status(400).json({sucess:false});
        break;
    }

}