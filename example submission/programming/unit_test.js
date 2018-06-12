
const assert = require('assert')
const Persone = require('./example')
const util = require('./utility')

/* ----- test create person node ----- */

const martObj = new Persone('Mart')
assert(martObj.name === 'Mart', 'Check person name (create obj)')
assert(martObj.friends.length === 0, 'Check friend list is empty (create obj)')

/* ----- test add friend/get friends ----- */

assert( martObj.getFriends().length === 0, 'Check friend list before add friend.' )
const tahObj = new Persone('Tah')
assert(martObj.addFriend(tahObj), 'Add friend fail, This friend is exist.')
assert(martObj.getFriends().length === 1, 'Check friend list after add friend.')
assert(martObj.getFriends()[0].name === 'Tah', 'Check friend name after add friend')

// expect false when add again
assert(!martObj.addFriend(tahObj), 'Test add exist friend ( expect false )')


/* ----- test make relation ----- */
const noteObj = new Persone('Note')
const japObj = new Persone('Jap')
assert(util.makeRelation(noteObj, japObj), 'Check make relation success')
assert(japObj.friends.includes(noteObj), `Check Note is Jap's friend after make relation`)
assert(noteObj.friends.includes(japObj), `Check Jap is Note's friend after make relation`)

// expect false when make relation again
assert(!util.makeRelation(noteObj, japObj), 'Test make relation with exist friend ( expect false )')
assert(!util.makeRelation(noteObj, noteObj), 'Test make relation with yourself ( expect false )')


/* ----- test get friends of friends ----- */

// init data1
const A = new Persone('A')
const B = new Persone('B')
const C = new Persone('C')
const D = new Persone('D')

// make relation2
util.makeRelation(A, B)
util.makeRelation(A, D)
util.makeRelation(B, D)
util.makeRelation(B, C)

assert.deepEqual(A.friendsOfFriends(), [C],'Check friends of friends of "A" (expect "C")' )

// init data2
const fieldObj = new Persone('Field')
const fahObj = new Persone('Fah')
const mikeObj = new Persone('Mike')
const kayObj = new Persone('Kay')
const masObj = new Persone('Mas')
const aonObj = new Persone('Aon')
const oatObj = new Persone('Oat')
const teoyObj = new Persone('Teoy')
const pongObj = new Persone('Pong')
const jeffObj = new Persone('Jeff')
const showObj = new Persone('Show')
const dangObj = new Persone('Dang')
const jayObj = new Persone('Jay')
const poonObj = new Persone('Poon')
const bankObj = new Persone('Bank')
const meanObj = new Persone('Mean')
const kingObj = new Persone('King')
const zeeObj = new Persone('Zee')
const pokObj = new Persone('Pok')
const kaewObj = new Persone('Kaew')

// make relation2
util.makeRelation(martObj, fieldObj)
util.makeRelation(martObj, fahObj)
util.makeRelation(martObj, mikeObj)
util.makeRelation(martObj, kayObj)
util.makeRelation(martObj, masObj)

util.makeRelation(fieldObj, aonObj)
util.makeRelation(fieldObj, oatObj)
util.makeRelation(fieldObj, teoyObj)
util.makeRelation(fieldObj, pongObj)
util.makeRelation(fieldObj, jeffObj)

util.makeRelation(fahObj, fieldObj)
util.makeRelation(fahObj, showObj)
util.makeRelation(fahObj, dangObj)
util.makeRelation(fahObj, jayObj)
util.makeRelation(fahObj, poonObj)

util.makeRelation(mikeObj, bankObj)
util.makeRelation(mikeObj, meanObj)
util.makeRelation(mikeObj, kingObj)
util.makeRelation(mikeObj, zeeObj)
util.makeRelation(mikeObj, pokObj)

util.makeRelation(kayObj, kaewObj)
util.makeRelation(kayObj, oatObj)
util.makeRelation(kayObj, aonObj)
util.makeRelation(kayObj, masObj)
util.makeRelation(kayObj, fahObj)

util.makeRelation(masObj, aonObj)

assert.deepEqual(martObj.friendsOfFriends(), [aonObj, oatObj, teoyObj, pongObj, 
                                       jeffObj, showObj, dangObj, jayObj, 
                                       poonObj, bankObj, meanObj, kingObj, 
                                       zeeObj, pokObj, kaewObj], 'Check friends of friends of "Mart" is equal expect value')
