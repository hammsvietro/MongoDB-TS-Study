import jwt from 'jsonwebtoken';

interface data {
    id: number;
    username?: string;
}

function generateToken(data: data) {
    
    const token = jwt.sign(data, 'kkkovoovo',{
        expiresIn: 86400 * 30 // 30 dias
    }); 
};

export default generateToken;