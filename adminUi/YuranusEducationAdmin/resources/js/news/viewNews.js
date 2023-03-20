$(document).ready(function () {
    loadNewsDetails();
});

function loadNewsDetails() {
    /*JSON based Contact API Call with GET method*/
    $.ajax({
        type: "GET",
        url: 'http://192.168.0.216:8088/newsInfo/getAll',
        cache: false,
        crossDomain: true,
        dataType: "json",
        success: function (result) {
            $('#dataTable').DataTable().destroy();
            let newsData = result.data;
            let newsDetailsTbody = "";

            for (let i in newsData) {
                newsDetailsTbody = newsDetailsTbody + '<tr>' +
                    '<td>' + newsData[i].createdAt + '</td>' +
                    '<td>' + newsData[i].newsTitle + '</td>' +
                    '<td>' + newsData[i].newsDescription + '</td>' +
                    '<td>' +
                    '<a href="editNews.html" onclick="editNews(' + newsData[i].id + ')"><i class="fa fa-edit"></i></a>' +
                    '<a href="#" onclick="deleteNews(' + newsData[i].id + ')"><i class="fa fa-trash text-danger ml-2"></i></a>' +
                    '</td>';
            }
            $("#tbody").html(newsDetailsTbody);
            $('#dataTable').DataTable().draw();
        },
        error: function () {
            console.log('Something Wrong.');
        }
    });
}

function deleteNews(id) {
    let jsonRequest = {
        "id": id,
    };
    $.ajax({
        type: "DELETE",
        url: 'http://192.168.0.216:8088/newsInfo/delete',
        cache: false,
        data: jsonRequest,
        success: function (result) {
            window.location.href = "viewNews.html";
            console.log(result);
        },
        error: function () {
            console.log('Something Wrong.');
        }
    });
}
function editNews(id) {
    localStorage.setItem('editNewsId', id);
}
