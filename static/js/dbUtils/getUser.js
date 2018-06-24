$(document).ready(function () {
    $.ajax({
        url: '/user/email',
        xhrFields: { withCredentials: true },
        async: false,
        success: function (data) {
<<<<<<< HEAD
            console.log(data);
            if (data) {
=======
            console.log("USER:",data);
            if (data !== undefined) {
>>>>>>> 9de29217696b602d079cba369db83523b5694207
                $("#login").hide();
                $("#logout").show();
                $("#user").html(', ' + data);
            }
        }
    });
});