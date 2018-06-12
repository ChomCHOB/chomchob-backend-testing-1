
const makeRelation = (person1, person2) => {
  
  if(person1.addFriend(person2) && person2.addFriend(person1) && (person1 !== person2)){
    return true
  }else{
    return false
  }
  
}

module.exports = {
  makeRelation
}