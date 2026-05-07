// Problem - 01

const filterEvenNumbers = (values: number[]): number[] => {
    const evenNumber: number[] = [];
    values.forEach((score) => {
        if (score % 2 === 0)
            evenNumber.push(score); 
    });
    return evenNumber
}


// Problem - 02

const reverseString = (text: string): string => { 
    let reversed = '';
    for (let i = text.length-1; i >= 0; i--) { 
        reversed += text[i];
    }
    return reversed
}



// Problem - 03

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): StringOrNumber => { 
    if (typeof value === 'number') {
        return "Number"
    } else { 
        return "String"
    }
}

// Problem - 04


const getProperty = <T>(obj: T, key: keyof T) => { 
    return obj[key]
}


// Problem - 05

interface IBook{ 
    title: string,
    author: string,
    publishedYear: number,
}

const toggleReadStatus = (book: IBook) => {
    return {
        ...book,
        isRead: true,
    }
}


// Problem - 06

class Person { 
    name: string;
    age: number;

    constructor(name: string, age: number) { 
        this.name = name,
        this.age = age
    }
}

class Student extends Person{ 
    grade: string;
    constructor(name: string, age: number, grade: string) { 
        super(name,age)
        this.grade = grade
    }
    getDetails() { 
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}


// Problem - 07

const getIntersection = (array1: number[], array2: number[]):number[] => { 
    const intersectedArray = array1.filter(value=> array2.includes(value))
    return intersectedArray
}
