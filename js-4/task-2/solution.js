export class FinalString{
    constructor(){
        if (this.constructor !== FinalString){
            throw new('TryToExtendsFinalClassException')
        }
    }
}