$(document).ready(function () {

    /*jQuery Validation for add news*/
    $("#addNewsForm").validate({
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