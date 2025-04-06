export class Component1{
    model;
    
    activate(model){
        this.model = model;
        console.log(`Model '${this.model.name}' Activated`)    
    }

    deactivate(){
        console.log(`Model '${this.model.name}' Deactivated`)    
    }
}