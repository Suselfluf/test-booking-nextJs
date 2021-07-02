export class reservingForm {
    constructor() {
        this.weekDay = ' ';
        this.month = ' ';
        this.day = ' ';
        this.year = ' '
    }

    getData(){

        console.log(`Current information : ${this.weekDay} - weekDay, ${this.month} - month, ${this.day} - day, ${this.year} - year`);

    }

    setData(weekDay, year, month, day){
        this.weekDay = weekDay;
        this.month = month;
        this.day = day;
        this.year = year;
    }
}