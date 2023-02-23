$(document).ready(function () {

    /*jQuery Validation for add news*/
    $("#editNewsForm").validate({
        rules:{
            newsTitle:{
                required: true,
            },
            newsDescription:{
                required: true
            }
        },
    })
});