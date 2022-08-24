var jwt = require('jsonwebtoken');
module.exports = class jwtAuthClass{
    constructor(){}

   getToken(data){
       return  jwt.sign({data:data},process.env.JWT_SEC_KEY,{expiresIn:
    '100d'});
    }
    verifyToken(token){
        return jwt.verify(token,process.env.JWT_SEC_KEY);
    }
    getRandomToken(){
        return +new Date()*2+'_SESSION'; 
    }
}
