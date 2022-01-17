$(".update-btn").on("click", function() {
    fetch("/api/update/" + $(this).attr("name"), {
        method: "PUT",
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