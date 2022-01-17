$("#logout").on("click", function() {
    console.log("you're clikced logout")
    fetch('/users/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log('Data from Backed we got back after we did fetch!', data)
    })
})