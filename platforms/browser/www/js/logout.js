$(document).ready(function() {

    //logout function
    $("#logout").click(function() {
        localStorage.login = "false";
        window.location.href = "login.html";
    });

});