const data = require('../Data/userData')



const signupNewUser = (request,response)=>{
    const{firstname,lastname,email,password} = request.body

    data.map(iterator=>{
        if (iterator.email !== email && iterator.password !== password)
        {
            return response.status(200).json({message:"Successfully Registered!!"})
        }
        else if(iterator.email === email)
        {
            return response.status(401).json({message:"Email already Registered"})
        }
        else if(iterator.password === password){
            return response.status(402).json({message:"Use another new password"})
        }
        return response.status(401).json({message:"Username & Password already exist"})
    })
}


module.exports = {signupNewUser}