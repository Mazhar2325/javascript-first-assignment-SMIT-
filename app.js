//Chapter 1-3 Alerts | variables for strings | variables numbers 
document.getElementById("alertName").onclick = function () {
    alert("Mazhar Mehmood")
    let statement = 'alert("Mazhar Mehmood")';
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "";
}
document.getElementById("alertNumber").onclick = function () {
    alert("0333-1234567")
    let statement = 'alert("0333-1234567")';
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "";
}
//Chapter 4 Variables name legal and illegal
document.getElementById("variableName").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";


    let html = "<ul><li>A variable name can't contain any spaces.</li></ul> <ul><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li></ul> <ul><li>Though a variable name can't be any of JavaScript's keywords, it can <i>contain</i> keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal</li></ul>  <ul><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code> If you assign the string 'Floribundas' to the variable <code>Rose</code>, you'll come up empty.</li></ul> <ul><li>I teach the <i>camelCase</i> I teach the 'camelCase'? Because there is a hump or two (or three) in the middle of the name if the name is formed by more than one word. A camelCase name begins with lower case. If there's more than one word in the name,each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, creating a hump. If you form a variable name with only one word, like <code>response</code> there is no hump It's a camel that's out of food. Please adopt thecamelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.</li></ul>";
    document.getElementById("output").innerHTML = html;
    document.getElementById("output").style.cssText = "display: flex; flex-direction: column; justify-content: start; align-items: flex-start;";    
}

document.getElementById("cameCaseExmple").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let html = "<h3>Examples</h3> <ul><li><code>user</code></li> <li><code>userResponse</code></li> <li><code>userResponseTime</code></li> <li><code>userResponse</code></li><li><code>userResponseTimeLimit</code></li></ul>  ";
    document.getElementById("output").innerHTML = html;
    document.getElementById("output").style.cssText = "display: flex; flex-direction: column; justify-content: start; align-items: flex-start;";
    
}
// Chapter 5 Math Expressions | Familiar Operators
document.getElementById("sum2numbers").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    document.getElementById("statement").innerHTML = "let num1 = 10; <br> let num2 = 5; <br> let sum = num1 + num2;";
    document.getElementById("output").innerHTML = sum;
}
document.getElementById("sub2numbers").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let num1 = 10;
    let num2 = 5;
    let sub = num1 - num2;
    document.getElementById("statement").innerHTML = "let num1 = 10; <br> let num2 = 5; <br> let sub = num1 - num2;";
    document.getElementById("output").innerHTML = sub;
}
document.getElementById("mul2numbers").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let num1 = 10;
    let num2 = 5;
    let mul = num1 * num2;
    document.getElementById("statement").innerHTML = "let num1 = 10; <br> let num2 = 5; <br> let mul = num1 * num2;";
    document.getElementById("output").innerHTML = mul;
}
document.getElementById("div2numbers").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let num1 = 10;
    let num2 = 5;
    let div = num1 / num2;
    document.getElementById("statement").innerHTML = "let num1 = 10; <br> let num2 = 5; <br> let div = num1 / num2;";
    document.getElementById("output").innerHTML = div;
}
// calculate some numbers
document.getElementById("someCalculation").onclick = function () {
    document.getElementById("statement").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    let result = someCalculation;
    document.getElementById("statement").innerHTML = "let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);";
    document.getElementById("output").innerHTML = result;
}
document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerHTML = "";
}
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerHTML = "";
}