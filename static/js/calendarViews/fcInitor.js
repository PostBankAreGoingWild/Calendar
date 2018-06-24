$(document).ready(function () {
    let today = new Date();
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,agendaThreeDay'//,listWeek
        },

        views: {
            agendaThreeDay: {
                type: 'agenda',
                duration: { days: 3 },
                buttonText: '3 day'
            }
        },

        defaultDate: today,
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: function (start, end, timezone, callback) {
            //dbMediator.useFakeEvents(callback);/*
            $.ajax({
                url: '192.168.166.223:3000/event',
                dataType: 'application/json',
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                data: {
                    start: start.toISOString(),
                    end: end.toISOString()
                },
                success: function (events) {
                    callback(events);
                }
            });//*/
        },
        eventRender: function (event, element) {
            if (event.type === 4) {
                element.css("background-color", "red");
                element.css("color", "white");
            }
            else if (event.type === 3) {
                element.css("background-color", "green");
                element.css("color", "white");
            }
            else if(event.type === 2) {
                element.css("background-color", "blue");
                element.css("color", "white");
            }
            else if (event.type === 1)
                element.css("background-color", "yellow");
            else if (event.type === 0)
                element.css("background-color", "cyan");

            element.click(function () {
                $(".modal h5").html(event.title);
                $(".modal .modal-body").html(event.description);
                $(".modal").show();
            });
        }
    });
});