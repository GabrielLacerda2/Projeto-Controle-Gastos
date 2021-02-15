import dbConnect from '../../../utils/dbConnect';
import Usuario from '../../../models/Usuario';

const authConfig = require('../../../src/config/auth');

const jwt = require('jsonwebtoken');

dbConnect();

export default async (req, res) => {
     const {email, senha} = req.body;

     const user = await Usuario.findOne({email}).select('+senha');

     if(!user){
         return res.status(400).send({error: 'Not Found'}); 
     }

     if(!senha === user.senha){
        return res.status(400).send({error: 'Not Found'}); 
     }

     const token = jwt.sign({ id: user.id }, authConfig.secret, {
         expiresIn: 86400,
     } )

     res.send({user, token});
}