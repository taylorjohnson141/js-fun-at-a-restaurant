function nameMenuItem(name) {
return `Delicious ${name}`

}

function createMenuItem(name,price,type){
return {
  name : name,
  price : price,
  type: type,
}
}
function addIngredients(ingredient,array){
  //For some reason a set isn't working
  //the length messes up and says it is 1 bigger but it isn't different
  //a;; pther tests work with the Set
  // array.push(ingredient)
  // console.log(array.length)
  // var set =new Set(array)
  // console.log(set)
  // array = Array.from(set)
  // console.log('array',array)
  // console.log(array.length)
  if(!array.includes(ingredient)){
    array.push(ingredient)
  }
}

function formatPrice(price){
  return '$' + price
}
function decreasePrice(price){
  return price -= price * .1
}
function createRecipe(title, ingredients , menuItemType){
  return {
    title :title,
    ingredients :ingredients,
    type:menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
