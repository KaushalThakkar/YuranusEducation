$(document).ready(function () {

    let getEditNewsId = localStorage.getItem('editNewsId');
    localStorage.clear();
    editNewsData(getEditNewsId);

    /*jQuery Validation for add news*/
    $("#editNewsForm").validate({
        rules: {
            newsTitle: {
                required: true,
            },
            newsDescription: {
                required: true
            }
        },
    })
});

function editNewsData(id) {
    let jsonRequest = {
        "id": id,
    };

    /*JSON based Contact API Call with GET method*/
    $.ajax({
        type: "GET",
        url: 'http://192.168.0.216:8088/newsInfo/insert',
        cache: false,
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        data: jsonRequest,
        success: function (result) {
            let response = result.data;

            $("#editNewsTitle").html(response.newsTitle);
            $("#editNewsDescription").html(response.newsDescription);
        },
        error: function () {
            console.log('Something Wrong.');
        }
    });
}
