function createRestaurant(name){
return {
  name:name,
  menus:{
    breakfast:[],
    lunch:[],
    dinner:[],
  }
}
}
function addMenuItem(restaurant,item){
  if(!restaurant.menus[item.type].includes(item)){
    restaurant.menus[item.type].push(item)
  }
}

function removeMenuItem(restaurant,name,type){
  if(!restaurant.menus[type]){
    return `Sorry, we don't sell ${name}, try adding a new recipe!`

  }
  for(var i = 0;i< restaurant.menus[type].length;i++)
  if(Object.values(restaurant.menus[type][i]).includes(name)){
    var index = restaurant.menus[type].indexOf(name)
    restaurant.menus[type].splice(index,1)
    return `No one is eating our ${name} - it has been removed from the ${type} menu!`
  }
  else {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
