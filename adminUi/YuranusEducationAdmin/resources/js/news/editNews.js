$(document).ready(function () {


    let getEditNewsId = localStorage.getItem('editNewsId');
    localStorage.clear();
    console.log(getEditNewsId);

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
