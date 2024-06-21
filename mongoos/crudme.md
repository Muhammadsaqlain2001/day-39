#create method ***************
User.insertMany([

                    {name : 'lara', email : 'lara@gmail.com', age : 35},
                    {name : 'volve', email : 'volve@gmail.com', age : 45},
                    {name : 'jason', email : 'jason@gmail.com', age : 35}

                ]).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })

const user1 = new User({
    name : "Adam",
    email : 'adam@gmail.com',
    age : 24
})

user1.save();

const user2 = new User({
    name : "eve",
    email : 'eve@gmail.com',
    age : 24
})

user2.save().then((res)=>{
    console.log('data successful save.')
}).catch((err)=>{
    console.log(err)
})
-----------------------------------------------------
#read method **********
User.find({_id : '66744b22e5f9e1a8e0c1268a'}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
User.findOne({age : {$gte : 30}}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

User.find({age : {$gte : 30}}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

User.findById('66744b22e5f9e1a8e0c1268a').then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

----------------------------------------------------------------- 

#update method

User.findByIdAndUpdate({_id :'66744b22e5f9e1a8e0c1268c'}, {name : 'Mark'}, {new: true}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

User.findOneAndUpdate({name : 'volve'}, {age : 30}, {new: true}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

User.updateMany({age :{$gte :35}}, {age : 38}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

User.updateOne({age : 38} , {$set : {name : 'Bruce'}}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

User.updateOne({name : "lara"}, {age : 38}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

---------------------------------------------------

#delete mehtod

User.findByIdAndDelete('66744b22e5f9e1a8e0c1268c').then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

User.findOneAndDelete({age : 30}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

User.deleteMany({age : 25}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})

User.deleteOne({name : 'eve'}).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)})