function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(responseToJson)
        .then(printPosts);
}
function responseToJson(response){
    return response.json();
}

function printPosts(posts){
    for (i = 0; i < posts.length; i++) {
        console.log("User id is: " + posts[i]["userId"]);
        console.log("id is: " + posts[i]["id"]);
        console.log("Title is: " + posts[i]["title"]);
        console.log("body is: " + posts[i]["body"]);
        console.log("--------------");

    }
}
fetchPosts();