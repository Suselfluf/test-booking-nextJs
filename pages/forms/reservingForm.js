export class reservingForm {
    constructor() {
        this.day = ' ';
        this.month = ' ';
        this.year = ' ';
    }

    getData(){

        // console.log(`Current information :${this.day} - day, ${this.month} - month, , ${this.year} - year`);
        return [{"Day":this.day},{"Month":this.month},{"Year":this.year}]

    }

    setData( day, month, year){
        this.month = month;
        this.day = day;
        this.year = year;
    }
}