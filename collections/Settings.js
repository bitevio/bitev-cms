const { Collection } = require("bitev.io/types")
module.exports= Collection({
       singleType: true,
       mode:"model",
       slug:"Settings",
       fields:[
       {
              name:'project_name',
              type:'string',
              admin:{
                     label:'Poject Name'
              }

       },
       {
              name:'project_description',
              type:'textarea',
              admin:{
                     label:'Project Description'
              }

       },
      
     
    ]
})