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
    })
});