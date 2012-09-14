// date.js implementation
var workdays = ["Jan. 22", 
                "Feb. 12", 
                "Mar. 4", 
                "Apr. 1", 
                "May 6", 
                "June 3", 
                "July 15", 
                "Aug. 5", 
                "Sept. 9", 
                "Oct. 7", 
                "Nov. 4", 
                "Dec. 9"],
    today = Date.today(),
    month = today.getMonth(),
    workday = Date.parse(workdays[month]),
    next = function() {
        var _next;
        if (today.compareTo(workday) <= 0) {
            _next = workdays[month];
        } else {
            _next = workdays[month + 1];
        }
        //return _next;

        return (today.compareTo(workday) <=0) ? workdays[month] : workdays[month+1];
    };
    
document.getElementById("next-workday").getElementsByTagName("span")[0].innerHTML = next();
