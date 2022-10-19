

    const mongoose=require('mongoose');
    const userdata=mongoose.Schema;
    const user=new userdata({
        email:{
            type:String,
            require:true
           },
        username:{
            type:String,
            require:true
        },
        ph_number:{
            type:String,
            require:true
        },
        role:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    },{timestamps:true});
    const userdat=mongoose.model('userdat',user);
    module.exports=userdat;
                    

                