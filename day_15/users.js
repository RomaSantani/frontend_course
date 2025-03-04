function fetchUsers(){
    fetch("https://jsonplaceholder.typicode.com/users",
    {
        method:"GET",
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response=>{
        return response.json();
    }).then(users=>{
        for(i=0;i<users.length;i++){
            console.log("email is: "+ users[i]["email"]);
            console.log("address street is: "+ users[i]["address"]["street"]);
            console.log("address suite is: "+ users[i]["address"]["suite"]);
            console.log("address city is: "+ users[i]["address"]["city"]);
            console.log("address zipcode is: "+ users[i]["address"]["zipcode"]);
            console.log("address latitude is: "+users[i]["address"]["geo"]["lat"]);
            console.log("address longitude is: "+users[i]["address"]["geo"]["lng"]);
        }
    })
}
fetchUsers();