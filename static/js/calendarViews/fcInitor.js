//window.elements = {};

function formatDate(datee) {
    let date = new Date(datee);
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + date.getHours() + ':' + date.getMinutes();
}

$(document).ready(function () {
    let today = new Date();
    $('#calendar').fullCalendar({
        locale: 'bg',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,agendaThreeDay'//,listWeek
        },

        views: {
            agendaThreeDay: {
                type: 'agenda',
                duration: { days: 3 },
                buttonText: '3 дни'
            }
        },

        defaultDate: today,
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: function (start, end, timezone, callback) {
            //dbMediator.useFakeEvents(callback);/*
            let request = $.ajax({
                url: '/event',
                xhrFields: { withCredentials: true },
                dataType: 'application/json',
                contentType: "application/x-www-form-urlencoded",
                data: {
                    start: start.toISOString(),
                    end: end.toISOString()
                },
                async: false
            });
            console.log(request);
            console.log(JSON.parse(request.responseText));
            let asdf = JSON.parse(request.responseText);
            for (let i in asdf) {
                asdf[i].title = asdf[i].name;
            }
            callback(asdf);
            $("#spinner").hide();
            $("#calendar").show();
        },
        eventRender: function (event, element) {
            //window.elements[element] = event;
            if (event.type === 4) {
                element.css("background-color", "red");
                element.css("color", "white");
            }
            else if (event.type === 3) {
                element.css("background-color", "green");
                element.css("color", "white");
            }
            else if (event.type === 2) {
                element.css("background-color", "blue");
                element.css("color", "white");
            }
            else if (event.type === 1)
                element.css("background-color", "yellow");
            else if (event.type === 0)
                element.css("background-color", "cyan");

            element.on('click', function () {
                $("#title").html(event.title);
                $("#body").html(event.descritption + "<br>" + formatDate(event.start) + ' - ' + formatDate(event.end));
                $(".modal").show();
            });
        }
    });
});