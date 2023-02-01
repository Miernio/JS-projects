import { renderUserList } from "./dom-utils.js";
const API_URL='https://randomuser.me/api/?results=50';
let users;
fetch(API_URL)
.then((res)=> res.json())
.then((dataRaw)=>dataRaw.results)
// .then((usersRes)=>console.log(usersRes))
.then((usersRaw)=>{users=usersRaw.map(user=>{
    return{
        email:user.email,
        name:user.name.first,
        surname:user.name.last,
        photoImg:user.picture.medium,
        age:user.dob.age,
        location:user.location.city
    };
})
renderUserList(users);
});