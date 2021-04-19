import dbConnect from '../../../utils/dbConnect';
import Usuario from '../../../models/Usuario';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'PUT':
            try {
                const usuarios = await Usuario.findOne({email: req.body.email,senha:req.body.senha}).select('+senha');
                res.status(201).json({sucess:true, data: usuarios})
            } catch (error) {
                res.status(400).json({error});
            }          
            break;
        case 'POST':
            try {
                const usuarios = await Usuario.create(req.body);

                res.status(201).json({sucess:true, data: usuarios})
            } catch (error) {
                res.status(400).json({error});
            }  
            break;
        default: 
        res.status(400).json({sucess:false});
        break;
    
        }
}