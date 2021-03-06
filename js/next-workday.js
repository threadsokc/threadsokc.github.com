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
    var workdays = ["Jan. 13", "Feb. 3", "Mar. 3", "Apr. 17", "May 5", "June 2", "July 14", "Aug. 4", "Sept. 8", "Oct. 6", "Nov. 3", "Dec. 1"],
        today = Date.today(),
        month = today.getMonth(),
        workday = Date.parse(workdays[month]),
        next = function () {
            var isDec = function() { return (month === 11) };
            
            return today.compareTo(workday) <= 0 ? workdays[month] : isDec() ? workdays[0] : workdays[month + 1];
        };

    jQuery('#next-workday span').html(next());
    //document.getElementById('next-workday').getElementsByTagName('span')[0].innerHTML = next();
};

/**
 * Initializer for Threads.
 * @requires jQuery
 */
Threads.init = function () {
    console.log('Threads.init');
    var dateUrl = 'http://threadsokc.github.io/js/date.js'; 

    jQuery.getScript(dateUrl, function() {
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
