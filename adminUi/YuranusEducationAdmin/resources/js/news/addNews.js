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

    $("#addNewsForm").submit(function (e) {
        if (!$("#addNewsForm").valid()) {
            return false;
        }

        e.preventDefault();

        let newsTitle = $("#newsTitle").val();
        let newsDescription = $("#newsDescription").val();

        let jsonRequest = {
            "newsTitle": newsTitle,
            "newsDescription": newsDescription,
        };

        /*JSON based Contact API Call with POST method*/
        $.ajax({
            type: "POST",
            url: 'http://192.168.0.216:8088/newsInfo/insert',
            cache: false,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(jsonRequest),
            success: function () {
                    window.location.href = "viewNews.html";
            },
            error: function () {
                console.log('Something Wrong.');
            }
        });

    });
});
