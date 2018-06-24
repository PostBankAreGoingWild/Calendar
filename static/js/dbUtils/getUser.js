$(document).ready(function () {
    $.ajax({
        url: '/user/email',
        xhrFields: { withCredentials: true },
        async: false,
        success: function (data) {
            console.log("USER:",data);
            if (data !== undefined) {
                $("#login").hide();
                $("#logout").show();
                $("#user").html(', ' + data);
            }
        }
    });
});