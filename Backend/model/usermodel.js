const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require("crypto")
///schema represent documenet mtlb ju hum database data save krthy hae wu humy kis tara chaiyae hothy us liyae used krthy hae
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
   
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default:"admin"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

   
            token:{
                type: String,
                default:""

            }
        
    
})
//we are hashing a password

userSchema.pre('save', async function (next) {
 
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)

    }
    next();
})
////////compare wala code likna hae yaad sy
// Compare Password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


// we are generating a token
userSchema.methods.generateAuthToken = function() {
    try {
        return jwt.sign({ id: this._id}, process.env.SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRE,
        });
        // this.tokens = this.tokens.concat({token: token});
        // await this.save();
        // return token; 

    }
    catch (err) {
        console.log(err);
    }
}

/////////reset token password
userSchema.methods.getResetPasswordToken = async function() {

   
    const resettoken = crypto.randomBytes(20).toString("hex")

///////////hashing and resetpasswordtoken to userShema

this.resetPasswordToken = crypto
.createHash("sha256")
.update(resettoken)
.digest("hex")

this.resetPasswordExpire = Date.now() + 15*60*1000;
return resettoken;
}
/////////////////generating password reset token
const User = mongoose.model("USER", userSchema )
module.exports= User;