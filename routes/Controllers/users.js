import { v4 as uuidv4 } from 'uuid';

let users = []

export const  getUser = (req,res) => {  
    res.send(users)
};

export const createUser = (req,res) => {
    const user = req.body;

    const userId = uuidv4();

    const userWithID = { ...user, id: userId}

    users.push(userWithID)

    res.send(`User with the name ${user.firstName} has been added to the database !`)
}

export const getUserById =  (req,res) => {
    const { id } = req.params;
  
    const foundUser = users.find((user) => user.id === id )
  
    res.send(foundUser)
}

export const deleteById = (req,res) => {
    const { id } = req.params;

   users = users.filter((user) => user.id !== id )

   res.send(users)

}

export const updateById = (req,res) => {
    const { id } = req.params;
 
    const {firstName, lastName, age} = req.body;
 
    const userUpdate = users.find((user) => user.id === id)
 
     if(firstName) {
         userUpdate.firstName = firstName
     }
     if(lastName) {
         userUpdate.laslastName =lastName
     }
     if(age) {
         userUpdate.age = age
     }  
     
     res.send(`user with id ${id} has been updated`)
 }