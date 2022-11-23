const { Collection } = require("bitev.io/types")
module.exports= Collection({
       slug:"Roles",
       fields:[
        {
        name:"name",
        type:"string",
        },
        {
            name:'permissions',
            type:'json'
        }
    ]
})