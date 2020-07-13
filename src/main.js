
window.onload = function() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        console.log(response)
    });
};

function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
        } else {
            // cancelled
        }
    });
}
