function getComments() {
    fetch("https://jsonplaceholder.typicode.com/comments",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
        return response.json();
    }).then(comments => {
        for (let i = 0; i < comments.length; i++) {
            console.log("Post id is: " + comments[i]["postId"]);
            console.log("id is: " + comments[i]["id"]);
            console.log("name is: " + comments[i]["name"]);
            console.log("email is: " + comments[i]["email"]);
            console.log("body is: " + comments[i]["body"]);
            console.log("-------------");
        }
    })
}
getComments();
