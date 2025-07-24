const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);  // forEach values return nhi krta
                         // isliye filter use krte

 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNums.filter( (num) => num > 4)
//  console.log(newNums);

// ya thoda logic lagake likhna pdta

const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
} )
console.log(newNums);
