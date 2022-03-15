# vnnative3-element
Support action with Element 

## How to install ?

    npm install vnnative3-element

## Import 

    import Vnnative3Element from "vnnative3-element/dist/Vnnative3Element"

## How to use 
You can use same :

    Vnnative3Element.forcus(element_id).empty().add("<h1>Hello<h1>");

Or

    Vnnative3Element.forcus(element_id).addEventListener( 'click' , (event : Event) => {
        alert("OK");
    } ).empty().add("<h1>Hello<h1>");

Or

    Vnnative3Element.forcus(element_id).setAttribute( 'id' , "test");    

Or

     Vnnative3Element.forcus(element_id).empty().add("<h1>Hello<h1>");