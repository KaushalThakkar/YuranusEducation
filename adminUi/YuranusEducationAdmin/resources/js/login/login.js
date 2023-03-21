$(document).ready(function () {

    /*jQuery Validation for add news*/
    $("#loginForm").validate({
        rules:{
            userName:{
                required: true,
            },
            password:{
                required: true
            }
        },
    });

    $("#loginForm").submit(function (e) {
        if (!$("#loginForm").valid()) {
            return false;
        }

        e.preventDefault();

        let userName = $("#userName").val();
        let userPassword = $("#userPassword").val();

        let jsonRequest = {
            "username": userName,
            "password": userPassword,
        };

        /*JSON based Contact API Call with POST method*/
        $.ajax({
            type: "POST",
            url: 'http://192.168.0.216:8088/signIn',
            cache: false,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(jsonRequest),
            success: function () {
                window.location.href = "index.html";
            },
            error: function (error) {
                errorToast(error.responseJSON.message);
            }
        });

    });
});
