const scriptName = "Search-date-of-next-target-day.js";


/****************
 * ENG ver

 * Returns the next earliest date in YYYYMMDD format based on the target day of the week.
 * If you request "monday" as an argument on Wednesday, it returns the date of next Monday.
 * If you request "Wednesday" as an argument on Wednesday, it returns the date of day.
 * If you request "Friday" as an argument on Wednesday, it returns the date of this Friday.

****************/



Date.prototype.getYYYYMMDD = function() {

    var MM = this.getMonth() + 1;
    var DD = this.getDate();
    var result = this.getFullYear() + "" + (MM > 9 ? "":"0") + MM + (DD > 9 ? "":"0") + DD;

    return result;
}

function get(target_date_str) {

    var target_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(target_date_str);

    if(target_day == -1) {
        throw new Error('The factor must be one of the following: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]');
        return;
    }
    var today = new Date().getDay();

    if (today == target_day) {
        var d = new Date().getYYYYMMDD();

        return d;

    } else if (today > target_day) {

        target_day = 7 - (today - target_day);
        var d = new Date();
        d.setDate(new Date().getDate() + target_day);

        return d.getYYYYMMDD();
    } else if (today < target_day) {

        var d = new Date();
        target_day = target_day - today;
        d.setDate(new Date().getDate() + target_day);

        return d.getYYYYMMDD();
    }
}
