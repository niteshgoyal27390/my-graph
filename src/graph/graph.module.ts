import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { GraphComponent } from "./graph.component";
import { GraphResource } from './graph.service';

@NgModule({
    declarations: [
        GraphComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        GraphComponent
    ],
    providers: [
        GraphResource
    ]
})

export class GraphModule{

}