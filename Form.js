class Form {
    constructor(){}
   
   
    display(){
        var title = createElement('h1');
        title.html("Among Us");
        title.position(displayWidth/2,150);
        
        var input = createInput("Enter Join Code Here");
        var confirm = createButton("Confirm");
        var create = createButton("Create Public Match");
        
        input.position(displayWidth/2, displayHeight/2.5);
        confirm.position(displayWidth/2.5, displayHeight/2.5);
        create.position(displayWidth/2, displayHeight/3)
    }
}