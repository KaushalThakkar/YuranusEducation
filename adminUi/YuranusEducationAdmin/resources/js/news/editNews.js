$(document).ready(function () {

    let getEditNewsId = localStorage.getItem('editNewsId');
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
    });

    $("#editNewsForm").submit(function (e) {
        if (!$("#editNewsForm").valid()) {
            return false;
        }

        e.preventDefault();

        let newsTitle = $("#editNewsTitle").val();
        let newsDescription = $("#editNewsDescription").val();

        let jsonRequest = {
            "newsTitle": newsTitle,
            "newsDescription": newsDescription,
        };

        /*JSON based Contact API Call with POST method*/
        $.ajax({
            type: "PUT",
            url: 'http://192.168.0.216:8088/newsInfo/update/' + getEditNewsId,
            cache: false,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(jsonRequest),
            success: function () {
                localStorage.clear();
                window.location.href = "viewNews.html";
            },
            error: function () {
                console.log('Something Wrong.');
            }
        });

    });
});

function editNewsData(id) {
    console.log(id);
    let jsonRequest = {
        "id": id,
    };

    /*JSON based Contact API Call with GET method*/
    $.ajax({
        type: "GET",
        url: 'http://192.168.0.216:8088/newsInfo/findById',
        cache: false,
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        data: jsonRequest,
        success: function (result) {
            let response = result.data;
            console.log(response.newsTitle);
            $("#editNewsTitle").val(response.newsTitle);
            $("#editNewsDescription").val(response.newsDescription);
        },
        error: function () {
            console.log('Something Wrong.');
        }
    });
}
