export class MyApp {

  modelA = { name: "Model A" };
  modelB = { name: "Model B" };

  selectedComponent = "component-1";
  selectedModel = this.modelA;
  
  public message = 'Hello World!';

  switchModel(){
    this.selectedModel =  this.selectedModel == this.modelA ? this.modelB : this.modelA;
  }

  switchComponent(){
    this.selectedComponent =  this.selectedComponent == "component-1" ? "component-2" : "component-1";
  }
}
