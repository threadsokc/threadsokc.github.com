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
    var dateUrl = '//threadsokc.github.com/js/date.js',
        workdays = ["Jan. 22", "Feb. 12", "Mar. 4", "Apr. 1", "May 6", "June 3", "July 15", "Aug. 5", "Sept. 9", "Oct. 7", "Nov. 4", "Dec. 9"],
        today = Date.today(),
        month = today.getMonth(),
        workday = Date.parse(workdays[month]),
        next = function() {
            return (today.compareTo(workday) <= 0) ? workdays[month] : workdays[month + 1];
        };

    jQuery.getScript(dateUrl, function() {
        jQuery('#next-workday span').html(next());
        //document.getElementById('next-workday').getElementsByTagName('span')[0].innerHTML = next();
    });
    
};

/**
 * Initializer for Threads.
 * @requires jQuery 
 */
Threads.init = function init() {
    return Threads.showNextWorkDay();
};


jQuery(function() {
    Threads.init();
});
