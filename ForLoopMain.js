/* Objective: 
a JavaScript for loop that displays the following in the browser console:
1 step
2 steps
3 steps
Done!
*/

//var i = 0;
var msg =" step";
for (i = 0; i < 3; i = i+1){
    console.log(i.toString() + msg);
    msg = " steps";
}
console.log("Done!");
