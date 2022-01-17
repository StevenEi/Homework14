// Front end delete button interactions

$(".delete-btn").on("click", function() {
    // connects the id of the items delete button to the fetch request so it deletes the proper ID obj from the database
    fetch("/api/delete/" + $(this).attr("name"), {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        window.location.reload()
    })
})