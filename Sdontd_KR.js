const scriptName = "Search-date-of-next-target-day.js";


/***************
 * KOR ver

 * 타겟으로 정한 요일을 해당 날짜를 기준으로 다음으로 가장 빠른 날짜를 YYYYMMDD형으로 반환합니다.
 * 수요일에 "월"을 인자로 요청할 경우, 다음주 월요일 날짜를 반환합니다.
 * 수요일에 "수"를 인자로 요청할 경우, 당일 날짜를 반환합니다.
 * 수요일에 "금"을 인자로 요청할 경우, 이번주 금요일 날짜를 반환합니다.

****************/


Date.prototype.getYYYYMMDD = function() {

    var MM = this.getMonth() + 1;
    var DD = this.getDate();
    var result = this.getFullYear() + "" + (MM > 9 ? "":"0") + MM + (DD > 9 ? "":"0") + DD;

    return result;
}

function get(target_date_str) {

    var target_day = ["일", "월", "화", "수", "목", "금", "토"].indexOf(target_date_str);

    if(target_day == -1) {
        throw new Error('인자는 ["일", "월", "화", "수", "목", "금", "토"] 중 하나여야 합니다.');
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
