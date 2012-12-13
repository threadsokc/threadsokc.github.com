/**
 * Wrapper for ThreadsOKC.org scripts.
 * @namespace
 */
var Threads = Threads || {};

/**
 * Gets the next workday and displays it on screen.
 * @requires date.js
 * @returns String Short month and day.
 */
Threads.showNextWorkDay = function showNextWorkDay() {
    var workdays = ["Jan. 13", "Feb. 3", "Mar. 3", "Apr. 17", "May 5", "June 2", "July TBD", "Aug. TBD", "Sept. TBD", "Oct. TBD", "Nov. TBD", "Dec. TBD"],
        today = Date.today(),
        month = today.getMonth(),
        workday = Date.parse(workdays[month]),
        next = function () {
            return(today.compareTo(workday) <= 0) ? workdays[month] : if (month == 11) { workdays[1] } else { workdays[month + 1] };
        };

    $('#next-workday span').html(next());
    //document.getElementById('next-workday').getElementsByTagName('span')[0].innerHTML = next();
};

/**
 * Initializer for Threads.
 * @requires jQuery
 */
Threads.init = function init() {
    var dateUrl = '//threadsokc.github.com/js/date.js';
console.info(jQuery.fn.jquery);
    $.getScript(dateUrl, function () {
        Threads.showNextWorkDay();
    });
};

$(function () {
    Threads.init();
});
