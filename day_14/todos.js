function getTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos",{
        method:"GET",
        headers: {
            'Content-Type':'application/json'
        }
    }).then(response =>{
        return response.json();
    }).then( todos =>{
        for(let i=0;i<todos.length;i++){
            console.log("User Id is: " + todos[i]["userId"]);
            console.log("Id is: " + todos[i]["id"]);
            console.log("Title is: " + todos[i]["title"]);
            console.log("Status :" + todos[i]["completed"]);
            console.log("-----------");
        }
    })
}
getTodos();
