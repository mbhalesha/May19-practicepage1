function greeting() {
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var greeting = "Hi " + first + " " + last;

    document.getElementById("hello").innerHTML = greeting;  
    
    //get commit - added greeting function
}