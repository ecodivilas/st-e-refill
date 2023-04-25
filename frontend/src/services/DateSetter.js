export const getCurrentDate = () => {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // January is 0
    var year = today.getFullYear();
    if (day < 10) {
    day = '0' + day;
    }
    if (month < 10) {
    month = '0' + month;
    }
    var formatted_date = year + '-' + month + '-' + day;
    // console.log(formatted_date);
    return formatted_date
}

export const getCurrentTime = () => {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hours < 10) {
    hours = '0' + hours;
    }
    if (minutes < 10) {
    minutes = '0' + minutes;
    }
    if (seconds < 10) {
    seconds = '0' + seconds;
    }
    var formatted_time = hours + ':' + minutes + ':' + seconds;
    // console.log(formatted_time);
    return formatted_time
}