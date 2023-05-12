var arr = [1,2,3,4,5];
console.log(arr);
for(var i = 0;i<arr.length;i++){
    console.log(arr[i]);
}
let myarr = ['lights','camera',34,null];
console.log(myarr.length);
let mylovelystringe = 'he is a good boy';
console.log((mylovelystringe.length));
d = mylovelystringe.replace('he','harry');
console.log(d, mylovelystringe);
function clicked(){
    console.log('button was clicked');
}
window.onload = function(){
    console.log('the document was loaded');
}
firstContainer.addEventListener('click', function(){
console.log("clicked on container");
})
firstContainer.addEventListener('mouseover', function(){
    console.log("mouse on container");
    })
    sum = (a,b)=>{
        return a+b
    }
log = ()=>{
    console.log('log in');
}
setTimeout(log, 2000);
obj = {name:"divya", length:1,a:{this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse('{"name":"divya","length":1,"a":{"this":"that"}}')
console.log(parsed);