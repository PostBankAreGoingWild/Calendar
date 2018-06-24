$(document).ready(function () {
    $.ajax({
        url: '/user/email',
        xhrFields: { withCredentials: true },
        async: false,
        success: function (data) {
            if (data) {
                $("#login").hide();
                $("#logout").show();
                $("#user").html(', ' + data);
            }
        }
    });
});