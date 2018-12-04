$(document).ready(function() {
    var url = "http://125.227.64.24/project/web_app/mail_service.php";

    //Login Function
    $("#submit").click(function() {

        var adress = $("#receiver").val();
        var title = $("#title").val();
        var msg = $("#msg").val();
        var dataString = "adress=" + adress + "&title=" + title + "&msg=" + msg + "&submit=";
        if ($.trim(adress).length > 0 & $.trim(title).length > 0 & $.trim(msg).length > 0) {
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() { $("#submit").html('Sending...'); },
                success: function(data) {
                    console.log(data);
                    if (data.match('success') != null) {
                        alert("Send success");
                        $("#submit").html('Submit');
                    } else if (data.match('failed') != null) {
                        alert("Send failed");
                        $("#submit").html('Submit');
                    }
                }
            });
        }
        return false;

    });
});