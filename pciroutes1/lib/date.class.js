class DateLib {
    //https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    timezoneList = {
        india:"Asia/Kolkata"
    }
    timezone="";
    timestampTimezoneChange(timestamp){
        return new Date((typeof timestamp === "string" ? new Date(timestamp) : timestamp).toLocaleString("en-US", {timeZone: this.timezone}));  
    }
    getFiscalYear(date) {
        var today = new Date(this.timestampTimezoneChange(date));
        var curMonth = today.getMonth();
        var fiscalYr = "";
        if (curMonth > 2) { 
            var nextYr1 = (today.getFullYear() + 1).toString();
            console.log(nextYr1, today)
            fiscalYr = today.getFullYear().toString() + "" + nextYr1;
        } else {
            var nextYr2 = today.getFullYear().toString();
            console.log(nextYr2, today)
            fiscalYr = (today.getFullYear() - 1).toString() + "" + nextYr2;
        }
        return fiscalYr;
    }

}
module.exports = (option) => new DateLib(option);