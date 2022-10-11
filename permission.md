# bitev-cms

async function setPermission(user, config) {
  
  var permissions = []
  return new Promise((resolve, reject) => {
    try {
    var modelsToArray = Object.keys(config.collections.models)
    modelsToArray.map((model) => {
      permissions.push({
        model: model,
        actions:[]
      })
    })
  
  if (user.permissions) {
    permissions = [
      ...user.permissions,
      ...permissions,
    ]

   return resolve([])
  }
  } catch (err) {
    return resolve([])
    console.log(err)
  }
    
  })
}
