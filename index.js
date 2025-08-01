const users =[{
    name: 'John Doe',
    age: 30,
    gender: 'Male'
},
{
    name: 'Jane Smith',
    age: 25,
    gender: 'Female'
},
{
    name: 'Sam Brown',
    age: 22,
    gender: 'Non-binary'
}
]

function checkUser(user){
    let arr2=[]
    for(let i=0; i<user.length; i++){
        if(user[i].age >18 && user[i].gender==='Male'){
            arr2.push(user[i]);
            console.log("User is an adult male.");
        }
    }
    return arr2;
}

const ans = checkUser(users);
console.log(ans);
