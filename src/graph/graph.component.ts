import { Component, ViewChild, OnInit } from "@angular/core";

@Component({
    selector: 'my-graph',
    templateUrl: './graph.component.html'
})

export class GraphComponent implements OnInit {
    @ViewChild('myCanvas') canvas
    private context: CanvasRenderingContext2D


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        let xPadding = 30;
        let yPadding = 30;
        let canvas = this.canvas.nativeElement;
        this.context = canvas.getContext('2d');
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#333';
        this.context.textAlign = "center";

        // Draw the axises
        this.context.beginPath();
        this.context.moveTo(xPadding, 0);
        this.context.lineTo(xPadding, canvas.height - yPadding);
        this.context.lineTo(canvas.width, canvas.height - yPadding);
        this.context.stroke();

        // Draw the Y value texts
        this.context.textAlign = "right"
        this.context.textBaseline = "middle";
        
        for(let i = 0; i < 60; i += 10) {
            this.context.fillText(i.toString(), xPadding - 10, i*1);
        }
        
        this.context.strokeStyle = '#f00';
    }
}
