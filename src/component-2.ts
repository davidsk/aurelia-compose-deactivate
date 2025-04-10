export class Component2{
    model;
    
    activate(model){
        this.model = model;
        console.log(`Model '${this.model.name}' Activated`)    
    }

    deactivate(){
        console.log(`Model '${this.model.name}' Deactivated`)    
    }

    detached(){
        console.log(`Model '${this.model.name}' Detached`)    
    }

    unbinding(){
        console.log(`Model '${this.model.name}' Unbinding`)    
    }
}