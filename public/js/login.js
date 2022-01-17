$('#login-btn').on('click', function (e) {
    e.preventDefault();
    var login = {
        userName: $("#username-login").val(),
        email: $("#email-login").val(),
        password: $("#password-login").val()
    }
    console.log("Login data", login)
    fetch('/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log('Data from Backed we got back after we did fetch!', data)
        // not sure why this isn't redirecting user to home after logging in
        window.location.href = '/'
    })
})