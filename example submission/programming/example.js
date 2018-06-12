class Person {

  constructor(name) {
    this.name = name
    this.friends = []
  }

  friendsOfFriends() {
    let friendsOfFriendsList = []
    for(let myFriend of this.friends){
      for(let friendOfMyFriend of myFriend.friends){
        if((!this.friends.includes(friendOfMyFriend)) && (!friendsOfFriendsList.includes(friendOfMyFriend)) && (friendOfMyFriend !== this)){
          friendsOfFriendsList.push(friendOfMyFriend)
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
