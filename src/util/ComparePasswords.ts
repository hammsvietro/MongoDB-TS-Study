import bcrypt from 'bcryptjs';

async function comparePassword(encryptedPass: string, loginPass: string): Promise<boolean>{
    
    return await bcrypt.compare(loginPass, encryptedPass);

}

export default comparePassword;