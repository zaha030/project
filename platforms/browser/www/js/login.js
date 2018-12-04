$(document).ready(function() {
    var url = "http://125.227.64.24/project/web_app/login.php";

    //Login Function
    $("#login").click(function() {

        var name = $("#name").val();
        var passwd = $("#passwd").val();
        var dataString = "name=" + name + "&passwd=" + passwd + "&login=";
        if ($.trim(name).length > 0 & $.trim(passwd).length > 0) {
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() { $("#login").html('Connecting...'); },
                success: function(data) {
                    if (data == "success") {
                        localStorage.login = "true";
                        localStorage.name = name;
                        window.location.href = "index.html";
                    } else if (data = "failed") {
                        alert("Login error");
                        $("#login").html('Login');
                    }
                }
            });
        }
        return false;

    });
});