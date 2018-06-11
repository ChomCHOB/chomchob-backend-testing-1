class Person {

  constructor(name) {
    this.name = name
    this.friends = []
  }

  friendsOfFriends() {
    let friendsOfFriendsList = []
    for(let myFriend of this.friends){
      for(let friendOfFriend of myFriend.friends){
        if((!this.friends.includes(friendOfFriend)) && (!friendsOfFriendsList.includes(friendOfFriend)) && (friendOfFriend !== this)){
          friendsOfFriendsList.push(friendOfFriend)
        }
      }
    }
    return friendsOfFriendsList
  }

  addFriend(anotherPerson){
    if(!this.friends.includes(anotherPerson)){
      // add sucsess
      this.friends.push(anotherPerson)
      return true

    }else{
      // add fail
      return false
    }
  }

  getFriends(){
    return this.friends
  }

}

module.exports = Person
