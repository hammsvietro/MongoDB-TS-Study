import jwt from 'jsonwebtoken';

export interface data {
    id: number;
    username?: string;
}

function generateToken(data: data): string {
    
    const token = jwt.sign(data, 'kkkovoovo',{
        expiresIn: 86400 * 30 // 30 dias
    });

    return token;
};

export default generateToken;