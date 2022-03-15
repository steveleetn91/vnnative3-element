import { Vnnative3EleInterface, Vnnative3ElementInterface } from "./Vnnative3Element.interface";

class Vnnative3Ele implements Vnnative3EleInterface {
    effect : Vnnative3ElementInterface | null = null
    forcus(elementId : string) : Vnnative3Ele {
        this.effect = document.getElementById(elementId);
        return this;
    } 
    setAttribute(key : string,value:string) : Vnnative3Ele {
        this.effect!.setAttribute(key,value);
        return this;
    }
    addEventListener(eventName : string,callback: Function) : Vnnative3Ele {
        this.effect!.addEventListener(eventName,(event:Event) => {
            callback(event);
        });
        return this;
    }
    empty() : Vnnative3Ele {
        this.effect!.innerHTML = "";
        return this;
    }
    add(html : string) : Vnnative3Ele {
        this.effect!.innerHTML += html;
        return this;
    }
}
const Vnnative3Element : Vnnative3Ele = new Vnnative3Ele;
export default Vnnative3Element;