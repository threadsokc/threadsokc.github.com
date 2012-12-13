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
Threads.showNextWorkDay = function () {
    var workdays = ["Jan. 13", "Feb. 3", "Mar. 3", "Apr. 17", "May 5", "June 2", "July TBD", "Aug. TBD", "Sept. TBD", "Oct. TBD", "Nov. TBD", "Dec. TBD"],
        today = Date.today(),
        month = today.getMonth(),
        workday = Date.parse(workdays[month]),
        next = function () {
            return today.compareTo(workday) <= 0 ? workdays[month] : workdays[month + 1];
        };

    $('#next-workday span').html(next());
    //document.getElementById('next-workday').getElementsByTagName('span')[0].innerHTML = next();
};

/**
 * Initializer for Threads.
 * @requires jQuery
 */
Threads.init = function () {
    console.log('Threads.init');
    var dateUrl = 'http://threadsokc.github.com/js/date.js'; 

    $.getScript(dateUrl, function() {
        Threads.showNextWorkDay();
    });
};

(function() {
    var counter = 0;

    doDetect();
    function doDetect() {
        if (typeof jQuery !== "undefined") {
           Threads.init();
        }
        else if (++counter < 5) { // 5 or whatever
            setTimeout(doDetect, 10);
        }
        else {
           console.error('jQuery not loaded!')
        }
    }
})();
