const express =require('express')
const router = express.Router()

let contact = [
    {id: 0, name: 'Ned', surname: 'Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon', surname: 'Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell', surname: 'Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Jon', surname: 'Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya', surname: 'Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora', surname: 'Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion', surname: 'Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis', surname: 'Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery', surname: 'Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
    {id: 12, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
  ]




router.get('/contact/:check',(req,res)=>{
  let check=req.params.check
  let ar=[]
  for(var i=0;i<contact.length;i++)
  {
    let find=contact[i]
    if(check==contact[i].name||check==contact[i].surname ||check==contact[i].id||check==contact[i].email||check==contact[i].notes||check==contact[i].phone||check[i]==contact[i].url)
    {
        ar.push(contact[i])
    }
  } 
  if(ar.length==0)
  {ar.push("Not Found")}
  res.json(ar)
})


router.get('/contact',(req,res)=>{
  let test=req.query.name
  let c
  let a=[]
  if(test!=c){
    for(var i=0;i<contact.length;i++)
    {
      if(test==contact[i].name)
      {
        a.push(contact[i])
      }
    }
  }
  else{
    for(var i=0;i<contact.length;i++)
    {
      
        a.push(contact[i])
      
    }}
  res.json(a)
  

})




function isNullOrWhiteSpace(str) {
  return (!str || str.length === 0 || /^\s*$/.test(str))
}

router.post('/contact', (req, res) => {

  let newContact = req.body
  let tmp = []
  if(!isNullOrWhiteSpace(newContact.name)   &&  !isNullOrWhiteSpace(newContact.email)){
    contact.push(newContact)
    newContact.create = '2017-11-26'
    tmp.push(newContact)
  }else if(isNullOrWhiteSpace(newContact.name) && isNullOrWhiteSpace(newContact.email)){
    tmp.push("name and email is Empty Please enter a valid name & email !")
  }else if(isNullOrWhiteSpace(newContact.name)){
    tmp.push("name is Empty Please enter a valid name !")
  }else if(isNullOrWhiteSpace(newContact.email)){
    tmp.push("email is Empty Please enter a valid email !")
  }

  res.json(tmp)

})

router.put('/contact/:id', (req,res) =>  {
  let editId = req.params.id
  let editContact = req.body
  let tmp = []
  if(!isNullOrWhiteSpace(editContact.name) && !isNullOrWhiteSpace(editContact.email)){
    editContact.id = editId
    for(var i=0; i<contact.length;i++)
    {
      if(editId == contact[i].id)
      {
        contact[i] = editContact
      }
    }
    tmp.push(contact[editId])

  }else if(isNullOrWhiteSpace(editContact.name)  && isNullOrWhiteSpace(editContact.email)){
    tmp.push("name and email is Empty Please enter a valid name & email !")
  }else if(isNullOrWhiteSpace(editContact.name)){
    tmp.push("name is Empty Please enter a valid name !")
  }else if(isNullOrWhiteSpace(editContact.email)){
    tmp.push("email is Empty Please enter a valid email !")
  }
    res.json(tmp)
    
})

  router.delete('/contact/:id', (req, res) => {
    contact.splice(req.params.id, 1)
    return res.send('User deleted')
  })

  module.exports = router 