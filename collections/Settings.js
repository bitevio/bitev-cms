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
       {
              name:'project_logo',
              type:'media',
              admin:{
                     label:'Project Logo'
              }
       },
       {
              name:'public_background',
              type:'media',
              admin:{
                     label:'Public Background'
              }
       },
       {
              name:'public_note',
              type:'string',
              admin:{
                     label:'Public note'
              }

       },
      
     
    ]
})