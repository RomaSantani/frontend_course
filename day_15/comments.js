function fetchComments() {
    fetch("https://jsonplaceholder.typicode.com/comments",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(responseToJson)
        .then(printPostId);
}
function responseToJson(response) {
    return response.json();
}

function printPostId(comments) {
    for (i = 0; i < comments.length; i++) {
        console.log("post id is:" + comments[i]["postId"]);
    }
}
fetchComments();