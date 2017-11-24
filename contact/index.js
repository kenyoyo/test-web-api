const express =require('express')
const router = express.Router()

let contactList = [
    {id: 0, fname: 'Ned', lname: 'Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, fname: 'Theon', lname: 'Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, fname: 'Samwell', lname: 'Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, fname: 'Jon', lname: 'Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, fname: 'Arya', lname: 'Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, fname: 'Jora', lname: 'Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, fname: 'Tyrion', lname: 'Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, fname: 'Stannis', lname: 'Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, fname: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, fname: 'Margaery', lname: 'Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, fname: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, fname: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
    {id: 12, fname: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
  ]

router.get('/contactList', (req, res) => {
    res.json(contactList)
})


router.get('/contactList/:check',(req,res)=>{
  let check=req.params.check
  let ar=[]
  for(var i=0;i<contactList.length;i++)
  {
    let find=contactList[i]
    if(check==contactList[i].fname ||check==contactList[i].id||check==contactList[i].email||check==contactList[i].notes||check==contactList[i].phone||check[i]==contactList[i].url)
    {
        ar.push(contactList[i])
    }
  } 
  if(ar.length==0)
  {ar.push("Not Found")}
  res.json(ar)
})


router.get('/contactList',(req,res)=>{
  let test=req.query.name
  let c
  let a=[]
  if(test!=c){
    for(var i=0;i<contactList.length;i++)
    {
      if(test==contactList[i].name)
      {
        a.push(contactList[i])
      }
    }
  }
  else{
    for(var i=0;i<contactList.length;i++)
    {
      
        a.push(contactList[i])
      
    }}
  res.json(a)
  

})


router.post('/contactList', (req, res) => {
  let newContact = req.body
  contactList.push(newContact)
  newContact.create = '2017-11-24'
  res.json(newContact)
})

router.put('/contactList/:id', (req,res) =>  {
  let editId = req.params.id
  let editContact = req.body
  editContact.id = editId
  for(var i=0; i<contactList.length;i++)
  {
    if(editId == contactList[i].id)
    {
      contactList[i] = editContact
    }
  }
    res.json(contactList[editId])
})

  module.exports = router 