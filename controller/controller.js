const mongoose=require('mongoose')
const schema=require('../userSchema/schema')

const getAllData =async(req,res,next)=>{
    // console.log(req.body);
    let data
    try{
        data=await schema.find();
    }
    catch(err){
        console.log(err);
    }
    if(!data){
       return res.status(500).json("no data found")
    }
    else{
       return res.status(201).json({data})
    }
}

const CreateUser =(req,res,next)=>{
    // console.log(req.body);
    let data =req.body;
    try{
        schema.create(data);
    }
    catch(err){
        console.log(err);
    }
    if(!data){
       return res.status(500).json("not created")
    }
    else{
       return res.status(201).json({data})
    }
}

const UpdateData =async(req,res,next)=>{
    // console.log(req.body);
    const id = req.params.id;
    const { name, age, availability, price } = req.body;
    let data1;
    try{
        data1=await schema.findByIdAndUpdate(id,{
            name, age, availability, price
        })
        data1=await data1.save();
    }
    catch(err){
        console.log(err);
    }
    if(!data1){
       return res.status(500).json("not updated")
    }
    else{
       return res.status(201).json({data1})
    }
}

const DeleteData =async(req,res,next)=>{
    // console.log(req.body);
    const id = req.params.id;
    const { name, age, availability, price } = req.body;
    let data1;
    try{
        data1=await schema.findByIdAndDelete(id)
    }
    catch(err){
        console.log(err);
    }
    if(!data1){
       return res.status(500).json("not deleted")
    }
    else{
       return res.status(201).json("deleted")
    }
}


const Sort =async(req,res,next)=>{
    // console.log(req.body);
    let data
    try{
        // data=await schema.find().sort({age:-1});
        // data=await schema.find({
        //     name:{$regex:new RegExp("and",'i')}
        // });
        let queri=req.query.q;
        data=await schema.find({
            $or:[
                {name:{$regex:new RegExp(queri,'i')}},

            ]
            
        });
        // const result = await YourModel.aggregate([
        //     { $match: { fieldName: { $exists: true } } },
        //     { $group: { _id: null, averageValue: { $avg: '$fieldName' } } }
        //   ]);
    //     const pageNumber = parseInt(req.query.pageNumber) || 1;
    // const pageSize = parseInt(req.query.pageSize) || 10;

    // const skip = (pageNumber - 1) * pageSize;

    // // Use Mongoose to query MongoDB with pagination
    // const result = await YourModel.find().skip(skip).limit(pageSize);

    }
    catch(err){
        console.log(err);
    }
    if(!data){
       return res.status(500).json("no data found")
    }
    else{
       return res.status(201).json({data})
    }
}




exports.Sort=Sort
exports.DeleteData=DeleteData
exports.UpdateData=UpdateData
exports.getAllData=getAllData
exports.CreateUser=CreateUser