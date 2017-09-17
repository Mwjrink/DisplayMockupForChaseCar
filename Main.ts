var JSONDataString: string = '{ "myString": "string", "myNumber": 4 }'

interface MyObj {
    myId: string;
    myTimeStamp: number;
    myData: number;
}

let obj: MyObj = JSON.parse(JSONDataString);
console.log(obj.myId);
console.log(obj.myTimeStamp);
console.log(obj.myData);

// document.body.innerHTML = (obj.myTimeStamp + " ~ " + obj.myId + ": " + obj.myData);

console.log(obj.myTimeStamp + " ~ " + obj.myId + ": " + obj.myData);