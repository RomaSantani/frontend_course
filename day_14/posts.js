function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "GET",
        headers: {
            'content-Type':'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data =>{
        const posts = data;

        for(let i=0;i<posts.length;i++){
            console.log("User id is: "+ posts[i]["userId"]);
            console.log("id is: "+ posts[i]["id"]);
            console.log("Title is: "+ posts[i]["title"]);
            console.log("body is: "+ posts[i]["body"]);
            console.log("--------------");

        }
    })
}
getPosts();