
function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }
    
    
}

 

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{

    return items.filter(item => item.rating >= 4);
}




function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.flat();    
}




class Vehicle {
    private make: string;
    private year:  number;
    constructor(make: string, year: number){

        this.make =make;
        this.year = year;
    }

    getInfo():string{
        return  `Make: ${this.make}, ${this.year}`;
    }

}

class Car extends Vehicle{
    private model: string;
    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model
    }


    getModel(): string {
        return `Model: ${this.model}`;
    }
}



function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length;
    }
    else {
        return value*2;
    }
}




interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }

    let expensiveProcuct = products[0];
    for(const product of products){
        if(   expensiveProcuct.price < product.price){
            expensiveProcuct = product
        }
    }

    return expensiveProcuct;
  }
 

  

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend';
    }
    else{
        return 'Weekday';
    }
  }


  
  async function squareAsync(n: number): Promise<number>{
    if(n < 0) {
        throw new Error("Negative numbers are not allowed");
    }
    await new Promise(resolve => setTimeout(resolve, 1000));

    return n* n;
}
