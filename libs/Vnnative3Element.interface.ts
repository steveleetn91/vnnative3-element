export interface Vnnative3ElementInterface extends HTMLElement {}
export interface Vnnative3EleInterface {
    effect : Vnnative3ElementInterface | null
    forcus(elementId : string) : Vnnative3EleInterface
    setAttribute(key : string,value:string) : Vnnative3EleInterface 
    addEventListener(eventName : string,callback: Function) : Vnnative3EleInterface 
    empty(eventName : string,callback: Function) : Vnnative3EleInterface 
    add(html : string) : Vnnative3EleInterface 
}