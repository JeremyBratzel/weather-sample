export class Forecast {
    Date: string;
    Temp: number;
    Icon: string;
    IconAddress: string;
    constructor(date: string, temp: number, icon?: string) {
        this.Date = date;
        this.Temp = temp;
        this.Icon = icon;
        this.IconAddress = `http://openweathermap.org/img/w/${this.Icon}.png`;
    }
}
