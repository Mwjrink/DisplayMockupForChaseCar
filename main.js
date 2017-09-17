var JSONDataString = '{ "myString": "string", "myNumber": 4 }';
var obj = JSON.parse(JSONDataString);
console.log(obj.myId);
console.log(obj.myTimeStamp);
console.log(obj.myData);
// document.body.innerHTML = (obj.myTimeStamp + " ~ " + obj.myId + ": " + obj.myData);
console.log(obj.myTimeStamp + " ~ " + obj.myId + ": " + obj.myData);
