// Class for creating data entries that contain all quiz answers for each submission
export default class DataEntry {
    constructor(age, country, idealUseTime, estimateUseTime, realUseTime) {
        this.age = age;                             // years
        this.country = country;                     // country name
        this.idealUseTime = idealUseTime;           // minutes
        this.estimateUseTime = estimateUseTime;     // minutes
        this.realUseTime = realUseTime;             // array of minutes
    }
}