var dbMediator = require("../dbConnector/getData");

$(document).ready(function () {
    dbMediator.useUserEvents(function (data) {
        let today = new Date();
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'//,listWeek
            },
            defaultDate: new Date().format('Y-m-d'),
            navLinks: true, // can click day/week names to navigate views
            editable: false,
            eventLimit: true, // allow "more" link when too many events
            events: data,
            eventRender: function (event, element) {
                element.click(function () {
                    $("")
                });
            }
        });
    });
});