export default class Calendar {
    constructor(selectedDate = {}, lang, textFormat, dateFormat, disabledRange = {
        from: null,
        to: null
    }) {
        this.currentDate = {
            year: selectedDate.year,
            month: selectedDate.month,
            date: selectedDate.date,
            firstDayOfWeek: selectedDate.firstDayOfWeek
        };
        this.textFormat = textFormat;
        this.formatOptions = dateFormat;
        this.currentYear = new Date().getFullYear();
        this.lang = lang;
        this.disabledRange = disabledRange;
        this.years = [...Array(21)].map((i, index) => this.currentYear + index);
        this.months = this.getMonths();
        this.days = this.getDays();
        this.week = this.getWeek();
        this.firstDayOfMonth = this.getFirstDayOfMonth();
        this.dates = this.getDates();
        this.daysOfMonth = this.showDates();
        this.weeksOfMonth = this.getWeekOfMonth()
    }

    getDays() {
        let days = [];
        let dayNumber;
        let name;
        for (let index = 1; index <= 7; index++) {
            name = new Date(this.currentDate.year, '00', index).toLocaleString(this.lang, { weekday: this.textFormat });
            dayNumber = parseInt(new Date(this.currentDate.year, '00', index).getDay());
            if (this.currentDate.firstDayOfWeek === 'monday') {
                dayNumber = ((dayNumber - 1) + 7) % 7
            }
            days.push({ name, dayNumber })
        }
        this.sortDays(days);
        return days
    }
    siblingsMonth(v, n) {
        return new Date(v.getFullYear(), v.getMonth() * 1 + n);
    }
    getWeek(){
        let dowOffset = typeof(this.currentDate.date) == 'int' ? this.currentDate.date : 0;
        let newYear = new Date(this.currentYear,0,1);
        let day = newYear.getDay() - dowOffset;
        day = (day >= 0 ? day : day + 7);
        let daynum = Math.floor((new Date().getTime() - newYear.getTime() -
            (new Date().getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
        let weeknum,nYear,nday;
        if(day < 4) {
            weeknum = Math.floor((daynum+day-1)/7) + 1;
            if(weeknum > 52) {
                nYear = new Date(this.currentYear + 1,0,1);
                nday = nYear.getDay() - dowOffset;
                nday = nday >= 0 ? nday : nday + 7;
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum+day-1)/7);
        }
        return weeknum;
    }
    getMonths() {
        let months = [];
        for (let index = 0; index < 12; index++) {
            let name = new Date(this.currentDate.year, index).toLocaleString(this.lang, { month: this.textFormat });
            months.push({ index, name })
        }
        return months
    }
    getDates() {
        let dates = [];
        for (let index = 1; index < 366; index++) {
            let date = new Date(this.currentDate.year, '00', index);
            dates.push(date)
        }
        return dates
    }

    showDates() {
        let countDateYears = this.dates.findIndex(item => new Date(item).getMonth() === this.currentDate.month);
        let daysOfMonth = this.dates.filter(item => new Date(item).getMonth() === this.currentDate.month);
        let dates = [];
        let prevDay = this.firstDayOfMonth;
        const prevYearLastOfMount = new Date(this.currentDate.year, '00', 1).getDate();
        if (this.currentDate.month === 0) {
            while (prevDay > 0) {
                let date = new Date(this.currentDate.year, '00', prevYearLastOfMount - prevDay);
                dates.push({
                    date: date,
                    isDayInMouth: false
                });
                prevDay -= 1;
            }
        } else {
            while (prevDay > 0 && countDateYears - prevDay > 0) {
                let date = this.dates[countDateYears - prevDay];
                dates.push({
                    date,
                    isDayInMouth: false
                });
                prevDay -= 1
            }
        }
        daysOfMonth = daysOfMonth.map(item => ({
            date: item,
            isDayInMouth: true
        }));
        dates = dates.concat(daysOfMonth);
        let nextDay = 0;
        let totalCount;
        while (dates.length % 7) {
            totalCount = countDateYears + daysOfMonth.length + nextDay;
            let date = totalCount < 365 ? this.dates[countDateYears + daysOfMonth.length + nextDay]
                : new Date(this.currentDate.year + 1, '00', nextDay + 1);
            dates.push({
                date,
                isDayInMouth: false
            });
            nextDay += 1;
        }
        dates = dates.map(item => ({
            mouth: new Date(item.date).getMonth(),
            day: new Date(item.date).getDate(),
            date: new Date(item.date).toLocaleDateString(this.lang, { ...this.formatOptions }),
            fullDate: new Date(item.date),
            isDayInMouth: item.isDayInMouth,
            isUsable: (!this.disabledRange.from ? true : this.dateCompare(this.disabledRange.from, item.date, 'small')) && (!this.disabledRange.to ? true : this.dateCompare(this.disabledRange.to, item.date, 'big'))
        }));
        return dates
    }
    dateCompare(date1, date2, compare) {
        date1.setHours(0,0,0,0);
        date2.setHours(0,0,0,0);
        switch (compare) {
            case 'small':
                return date1.getTime() >= date2.getTime();
            case 'big':
                return date2.getTime() >= date1.getTime();
            default:
                break
        }
    }
    getFirstDayOfMonth() {
        let firstDay = new Date(this.currentDate.year, this.currentDate.month, '01').getDay();

        if (this.currentDate.firstDayOfWeek.toLowerCase() === 'monday') {
            firstDay = ((firstDay - 1) + 7) % 7
        }
        return parseInt(firstDay)
    }
    sortDays(days) {
        return days.sort(function(a, b) {
            return a.dayNumber - b.dayNumber
        })
    }

    getWeekOfMonth() {
        let weeks = []
        const rows = Math.round(this.daysOfMonth.length / 7);
        for (let index = 0; index < rows; index++) {
            let countDateYears = this.dates.findIndex(item => new Date(item).getMonth() === this.currentDate.month);
            let weekNo = Math.floor(countDateYears / 7) + index + 1;
            weeks.push({
                index: weekNo,
                name: weekNo
            })
        }
        return weeks
    }
}
