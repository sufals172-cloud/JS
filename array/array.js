arr=[1,2,3,4];
let n=arr.length;
for(let i=0;i<n;i++)[
    console.log(arr[i])
]
console.log("After unshift");
arr.unshift(0);//add value from the front
for(let i=0;i<arr.length;i++)[
    console.log(arr[i])
]
// if we sue push() => add at the end of the array
// if pop() => remove from the end of the array
// if we use shif => delete the first element of the array