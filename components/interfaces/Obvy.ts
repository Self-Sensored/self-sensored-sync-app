export default interface IObvy {
    observer: string;
    observed: string;
    action: string;
    type: string;
    start: Date;
    end: Date;
    unit?: string;
    value: Number;
}
