const validate=(schema)=>async(req,res,next)=>{
    try {
        const parseBody= await schema.parseAsync(req.body);
        req.body =parseBody;
        next();
    }catch(err){
       
        const status =422;
        const message ="fil the input porperly";
        const extraDetails= (err.errors && err.errors[0] && err.errors[0].message) ||
            err.message ||
            "Error from backend";
        const error ={
            message,
            status,
            extraDetails,

        }

        console.log(error);
        // res.status(400).json({msg:message});
        next(error);
    }

};

module.exports= validate;