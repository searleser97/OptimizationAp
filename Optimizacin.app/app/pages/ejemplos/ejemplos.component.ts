import {Component, ChangeDetectionStrategy, Input} from "@angular/core";

class ExampleItem
{
    constructor(public name: string){}
}

@Component({
    selector: "examples",
    templateUrl: "pages/ejemplos/ejemplos.component.html",
    styleUrls: ["pages/ejemplos/ejemplos.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})



export class ExamplesComponent
{
    public myExamples: Array<ExampleItem>;
    private exampleNames: string[];
   
    constructor()
    {
        this.exampleNames = [];
        for(var i = 0; i<50;i++)
        {
            this.exampleNames[this.exampleNames.length] = ("Ejemplo " + i.toString());
        }
        this.myExamples = [];
        for(var i = 0; i<this.exampleNames.length; i++)
        {
            this.myExamples.push(new ExampleItem(this.exampleNames[i]));
        }
    }
    
    public onExampleTap(args)
    {
        alert(args.index);
    }
}