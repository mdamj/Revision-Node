const users=[
    {id:1,name:"Amjad",role:"Admin"},
    {id:2,name:"Sana",role:"User"}
];
export const getUsers=()=>users;
export const getUserById=(id)=>users.find((u)=>u.id===id);
export const addUser=(name,role)=>{
   const newUser={
        id:users.length+1,
        name,
        role
    };
    users.push(newUser);
    return newUser;
}
//This is model file in which we have a users array and we export getUsers function to all the user from the user array and then
//  we export getUserId function to get the users by calling find method(it is a method of array which is used to find the element in the array) 
// and we use u.id===id to find the user with that id and then we export addUser function to add new user to the users array and 
// we create a new user object in which we add the id as length of users array +1 and we give the name and role to the new user and 
// then we push the new users into the users array and then we return the new user to the client.
// what a export do that in this file we can use it in other files and what a import do that in this file we can use the export from other files.