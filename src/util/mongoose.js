module.exports={
    multipleMongooseToObject:function(mongooseArrays){
        return mongooseArrays.map(mongooseArrays=>mongooseArrays.toObject());
    },
    singleMongooseToObject:function(mongoose){
        return mongoose?mongoose.toObject():mongoose;
    }
}
