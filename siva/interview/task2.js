// 1. Make First Letter Capital

const captializeFirstLetter = ({str=''}) => {
    const captialized = str.charAt(0).toUpperCase()+str.slice(1)
    return captialized;
};

// console.log(captializeFirstLetter({str:"siva"}))

// 2. Replace String

const sentence = 'Mr red has a red house and a red car';

const result = sentence.split('red').join('blue')
// const result = sentence.split('red')

// console.log('result',result);

// 3. Callback

const sumCalculator = (a,b,callback) => {
    let sum = a+b;
    callback(sum)
};

const cbResult = (r) => {
console.log('cbResult',r);
}

// sumCalculator(1,2,cbResult)


// 4. Filter


const array = [1,2,3,4,5];


const data = array.map(e => e+1);
console.log('data',data);