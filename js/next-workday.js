// Weebly loads jQuery, too. Cheaters!
var dateUrl = '//threadsokc.github.com/js/date.js';
jQuery.getScript(dateUrl, showNextWorkday);


function showNextWorkday() {
    // date.js implementation
    var workdays = ["Jan. 22", "Feb. 12", "Mar. 4", "Apr. 1", "May 6", "June 3", "July 15", "Aug. 5", "Sept. 9", "Oct. 7", "Nov. 4", "Dec. 9"],
        today = Date.today(),
        month = today.getMonth(),
        workday = Date.parse(workdays[month]),
        next = function() {
            return (today.compareTo(workday) <= 0) ? workdays[month] : workdays[month + 1];
        };

    document.getElementById('next-workday').getElementsByTagName('span')[0].innerHTML = next();
}