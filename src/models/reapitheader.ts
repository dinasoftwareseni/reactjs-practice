class ReapitHeader{
    id: string;
    text: string;

    constructor(reapitheaderText:string){
        this.text = reapitheaderText;
        this.id=new Date().toISOString();
    }
}

export default ReapitHeader;