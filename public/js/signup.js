$("#signup-btn").on("click", function(e) {
    e.preventDefault();
    let newUser = {
        userName: $("#signup-username").val(),
        email: $("#signup-email").val(),
        password: $("#signup-pw").val(),
    }
    console.log("new post data", newUser)
    // fetches data from our [http://localhost(port)]/api/save using a POST route
    fetch("/users/signup", {
        method: "POST",
        // boilerplate fetch req code
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        // stringifys our new object
        body: JSON.stringify(newUser)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("backend fetch data", data)
        // not sure why this isn't redirecting user to home after logging in
        window.location.href = '/'
    })
})