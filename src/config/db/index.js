const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// //DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. 
// Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. 
// Or use `mongoose.set('strictQuery', true);` to suppress this warning.
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        
        console.log('Connect Sucess');
    } catch (error) {
        console.log('Connect Fail');
        
    }

}
module.exports={ connect };