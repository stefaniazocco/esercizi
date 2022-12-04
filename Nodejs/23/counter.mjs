class Pippo{
    constructor(){
        this.pippo= "Pippo";
    }
    output(){
        console.log(this.pippo)
    }
}

export const anotherPippo = new Pippo()

//--------------
//oppure

export const simplePluto = {
    pluto: "Pluto",
    output() {
        console.log(this.pluto)
    } 
}