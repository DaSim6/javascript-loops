/* Objective: 
a JavaScript for loop that displays the following in the browser console:
1 step
2 steps
3 steps
Done!
*/

var msg =" step";
var i = 0;
while(i < 3){
    console.log(i.toString() + msg);
    msg = " steps";
    i++;
}
console.log("Done!");

