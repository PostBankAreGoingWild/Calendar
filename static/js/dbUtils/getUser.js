$(document).ready(function () {
    $.ajax({
        url: '/event',
        dataType: 'application/json',
        contentType: "application/x-www-form-urlencoded",
        data: {
        },
        async: false,
        success: function (data) {
            if (data !== undefined) {
                $("#login").hide();
                $("#logout").show();
                $("#user").html(data);
            }
        }
    });
});