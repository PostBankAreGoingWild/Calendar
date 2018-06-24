$(document).ready(function () {
    $.ajax({
        url: '/user/email',
        dataType: 'application/json',
        xhrFields: { withCredentials: true },
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