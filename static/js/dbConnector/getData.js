(function () {
    return {
        useUserEvents: function (handler) {
            $.ajax({
                dataType: "json",
                url: "/events/get",
                data: {},
                success: function (data) {
                    handler(data);
                });
        }
    };
})();