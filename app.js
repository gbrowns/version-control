(function(num){

    //declare variables
    let inputName = document.querySelector(".input1").nodeValue;
    let button = document.querySelector(".btn");

    //add an eventListener to the button
    button.addEventListener('click', () => {

        //convert the value of input into a text
        let name = document.createTextNode(inputName);

        //write the name into the document

        document.write(name);
    });
    
    //expression
    let squareRoot = Math.sqrt(num);
   console.log(squareRoot);
})();