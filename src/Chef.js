class Chef {
  constructor(name,restaurant) {
    this.name = name;
    this.restaurant = restaurant;

  }
  greetCustomer(name,isMorning = false){
    if(!isMorning){
      return `Hello, ${name}!`
    }else {
      return `Good morning, ${name}!`
    }
  }
  checkForFood(foodItem){
    if(this.restaurant.menus[foodItem.type].length === 0){
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
    for(var i = 0 ; i<this.restaurant.menus[foodItem.type].length ; i++){
      var obj = this.restaurant.menus[foodItem.type][i]
    for(var key in obj){
      if(obj[key] === foodItem.name){
        return `Yes, we're serving ${foodItem.name} today!`
    }
}
  return `Sorry, we aren't serving ${foodItem.name} today.`
}
}
}

module.exports = Chef;
