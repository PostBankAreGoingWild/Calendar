const dbMediator = {
    useFakeEvents: function (handler) {
        handler([
            {
                title: 'All Day Event',
                start: '2018-03-01',
                description: 'asdf',
                type: 0
            },
            {
                title: 'All Day Event',
                start: '2018-03-02',
                type: 1
            },
            {
                title: 'All Day Event',
                start: '2018-03-03',
                type: 2
            },
            {
                title: 'All Day Event',
                start: '2018-03-04',
                type: 3
            },
            {
                title: 'All Day Event',
                start: '2018-03-05',
                type: 4
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T10:30:00',
                end: '2018-03-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-03-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                description: 'This is a cool event',
                start: '2018-03-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-03-28'
            }
        ]);
    },
    useUserEvents: function (handler) {
        $.ajax({
            dataType: "json",
            url: "http://192.168.166.223:3000/events/get",
            data: {},
            success: function (data) {
                handler(data);
            }
        });
    },
    useUserEventsByInterval: function (start, end, handler) {
        $.ajax({
            url: 'http://192.168.166.223:3000/event',
            dataType: 'application/json',
            contentType: "application/x-www-form-urlencoded",
            crossDomain: true,
            data: {
                start: start.toISOString(),
                end: end.toISOString()
            },
            success: function (events) {
                console.log(events.length);
                console.log(events);
                handler(events);
            }
        });
    },
};