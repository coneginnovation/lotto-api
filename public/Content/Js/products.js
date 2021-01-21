if ($('[data-toggle="widget-calendar"]')[0]) {
    $('[data-toggle="widget-calendar"]').fullCalendar({
        contentHeight: "auto",
        theme: !1,
        buttonIcons: {
            prev: " fas fa-angle-left",
            next: " fas fa-angle-right"
        },
        header: {
            right: "next",
            center: "title, ",
            left: "prev"
        },
        defaultDate: "2018-12-01",
        editable: !0,
        events: [{
            title: "Call with Dave",
            start: "2018-11-18",
            end: "2018-11-18",
            className: "bg-danger"
        }, {
            title: "Lunch meeting",
            start: "2018-11-21",
            end: "2018-11-22",
            className: "bg-warning"
        }, {
            title: "All day conference",
            start: "2018-11-29",
            end: "2018-11-29",
            className: "bg-success"
        }, {
            title: "Meeting with Mary",
            start: "2018-12-01",
            end: "2018-12-01",
            className: "bg-info"
        }, {
            title: "Winter Hackaton",
            start: "2018-12-03",
            end: "2018-12-03",
            className: "bg-danger"
        }, {
            title: "Digital event",
            start: "2018-12-07",
            end: "2018-12-09",
            className: "bg-warning"
        }, {
            title: "Marketing event",
            start: "2018-12-10",
            end: "2018-12-10",
            className: "bg-primary"
        }, {
            title: "Dinner with Family",
            start: "2018-12-19",
            end: "2018-12-19",
            className: "bg-danger"
        }, {
            title: "Black Friday",
            start: "2018-12-23",
            end: "2018-12-23",
            className: "bg-info"
        }, {
            title: "Cyber Week",
            start: "2018-12-02",
            end: "2018-12-02",
            className: "bg-warning"
        }]
    });
    var mYear = moment().format("YYYY"),
        mDay = moment().format("dddd, MMM D");
    $(".widget-calendar-year").html(mYear), $(".widget-calendar-day").html(mDay)
}

Fullcalendar = function () {
    var e, t, a = $('[data-toggle="calendar"]');
    a.length && (t = {
        header: {
            right: "",
            center: "",
            left: ""
        },
        buttonIcons: {
            prev: "calendar--prev",
            next: "calendar--next"
        },
        theme: !1,
        selectable: !0,
        selectHelper: !0,
        editable: !0,
        events: [{
            id: 1,
            title: "Call with Dave",
            start: "2019-04-18",
            allDay: !0,
            className: "bg-danger",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 2,
            title: "Lunch meeting",
            start: "2019-04-21",
            allDay: !0,
            className: "bg-warning",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 3,
            title: "All day conference",
            start: "2019-04-29",
            allDay: !0,
            className: "bg-success",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 4,
            title: "Meeting with Mary",
            start: "2019-05-01",
            allDay: !0,
            className: "bg-info",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 5,
            title: "Winter Hackaton",
            start: "2019-05-03",
            allDay: !0,
            className: "bg-danger",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 6,
            title: "Digital event",
            start: "2019-05-07",
            allDay: !0,
            className: "bg-warning",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 7,
            title: "Marketing event",
            start: "2019-05-10",
            allDay: !0,
            className: "bg-primary",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 8,
            title: "Dinner with Family",
            start: "2019-05-19",
            allDay: !0,
            className: "bg-danger",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 9,
            title: "Black Friday",
            start: "2019-05-23",
            allDay: !0,
            className: "bg-info",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
            id: 10,
            title: "Cyber Week",
            start: "2019-05-02",
            allDay: !0,
            className: "bg-yellow",
            description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }],
        dayClick: function (e) {
            var t = moment(e).toISOString();
            $("#new-event").modal("show"), $(".new-event--title").val(""), $(".new-event--start").val(t), $(".new-event--end").val(t)
        },
        viewRender: function (t) {
            e.fullCalendar("getDate").month(), $(".fullcalendar-title").html(t.title)
        },
        eventClick: function (e, t) {
            $("#edit-event input[value=" + e.className + "]").prop("checked", !0), $("#edit-event").modal("show"), $(".edit-event--id").val(e.id), $(".edit-event--title").val(e.title), $(".edit-event--description").val(e.description)
        }
    }, (e = a).fullCalendar(t), $("body").on("click", ".new-event--add", function () {
        var t = $(".new-event--title").val(),
            a = {
                Stored: [],
                Job: function () {
                    var e = Date.now().toString().substr(6);
                    return this.Check(e) ? this.Job() : (this.Stored.push(e), e)
                },
                Check: function (e) {
                    for (var t = 0; t < this.Stored.length; t++)
                        if (this.Stored[t] == e) return !0;
                    return !1
                }
            };
        "" != t ? (e.fullCalendar("renderEvent", {
            id: a.Job(),
            title: t,
            start: $(".new-event--start").val(),
            end: $(".new-event--end").val(),
            allDay: !0,
            className: $(".event-tag input:checked").val()
        }, !0), $(".new-event--form")[0].reset(), $(".new-event--title").closest(".form-group").removeClass("has-danger"), $("#new-event").modal("hide")) : ($(".new-event--title").closest(".form-group").addClass("has-danger"), $(".new-event--title").focus())
    }), $("body").on("click", "[data-calendar]", function () {
        var t = $(this).data("calendar"),
            a = $(".edit-event--id").val(),
            n = $(".edit-event--title").val(),
            o = $(".edit-event--description").val(),
            i = $("#edit-event .event-tag input:checked").val(),
            s = e.fullCalendar("clientEvents", a);
        "update" === t && ("" != n ? (s[0].title = n, s[0].description = o, s[0].className = [i], console.log(i), e.fullCalendar("updateEvent", s[0]), $("#edit-event").modal("hide")) : ($(".edit-event--title").closest(".form-group").addClass("has-error"), $(".edit-event--title").focus())), "delete" === t && ($("#edit-event").modal("hide"), setTimeout(function () {
            swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                type: "warning",
                showCancelButton: !0,
                buttonsStyling: !1,
                confirmButtonClass: "btn btn-danger",
                confirmButtonText: "Yes, delete it!",
                cancelButtonClass: "btn btn-secondary"
            }).then(function (t) {
                t.value && (e.fullCalendar("removeEvents", a), swal({
                    title: "Deleted!",
                    text: "The event has been deleted.",
                    type: "success",
                    buttonsStyling: !1,
                    confirmButtonClass: "btn btn-primary"
                }))
            })
        }, 200))
    }), $("body").on("click", "[data-calendar-view]", function (t) {
        t.preventDefault(), $("[data-calendar-view]").removeClass("active"), $(this).addClass("active");
        var a = $(this).attr("data-calendar-view");
        e.fullCalendar("changeView", a)
    }), $("body").on("click", ".fullcalendar-btn-next", function (t) {
        t.preventDefault(), e.fullCalendar("next")
    }), $("body").on("click", ".fullcalendar-btn-prev", function (t) {
        t.preventDefault(), e.fullCalendar("prev")
    }))
}();