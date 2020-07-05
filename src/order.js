function takeOrder(name,array){
  if(array.length <3){
    array.push(name)
}
}

function refundOrder (num,array){
array.splice(num-1,1)
array.forEach(function(v){
  if(v.orderNumber > num)
  v.orderNumber -=1
})
return array

}
function listItems (array){
  return array.map(function(v){
    return v.item
  }) .join(', ')


 }

function searchOrder (array,name){
  for(var i = 0 ; i<array.length ; i++){
    var obj = array[i]
  for(var key in obj){
    if(Object.values(obj).includes(name)){
      return true
  }
}
} return false

}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
