$("#newPost-btn").on("click", function(e) {
    e.preventDefault();
    let newPost = {
        title: $("#newPost-title").val(),
        body: $("#newPost-body").val()
    }
    console.log("new post data", newPost)
    fetch("/api/save", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("Data from backend after the fetch", data)
        window.location.reload()
    })
})

$("#newComment-btn").on("click", function(e) {
    e.preventDefault();
    let newComment = {
        body: $("#newComment-body").val()
    }
    console.log("new comment data", newComment)
    fetch("/api/savecomment", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("Data from backend after the fetch", data)
    })
})