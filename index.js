var recipes ={ godofwar: 'Kronos'}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
<<<<<<< HEAD
}
function deleteFromObjectByKey(obj, key) {
  return Object.assign ({}, {obj: key}, {obj: key})
}
function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key]
}
=======
}
>>>>>>> 314af9f97f4496cab53e495287f9cf9be0895083
