import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import Utils from "./utilities/graph.helper";

@Component({
    selector: 'my-graph',
    templateUrl: './graph.component.html'
})

export class GraphComponent implements OnInit {
    @ViewChild('myCanvas') canvas: ElementRef
    private context: CanvasRenderingContext2D


    ngOnInit(): void {
        this.context = this.canvas.nativeElement.getContext('2d');

        // TODO - Need to move the data part in service
        let data = {
            values: [
                { X: "Jan", Y: 12 },
                { X: "Feb", Y: 28 },
                { X: "Mar", Y: 18 },
                { X: "Apr", Y: 34 },
                { X: "May", Y: 40 },
                { X: "June", Y: 90 },
            ]
        };

        let xPadding = 30;
        let yPadding = 30;

        // Draw the axises
        Utils.drawXAndYAxises(this.canvas, xPadding, yPadding);

        // Draw the texts along the X-axis
        data.values.forEach((element, index) => {
            this.context.fillText(element.X,
                Utils.getXPixel(this.canvas, index, xPadding, data),
                this.canvas.nativeElement.height - yPadding + 20);
        });

        this.context.textAlign = 'right';
        this.context.textBaseline = 'middle';

        // Draw the texts along the Y-axis
        for (let i = 0; i < Utils.getMaxY(data); i += 10) {
            this.context.fillText(i.toString(),
                xPadding - 10,
                Utils.getYPixel(this.canvas, i, yPadding, data));
        }

        this.context.stroke()

        this.context.strokeStyle = '#f00';
        this.context.beginPath();
        this.context.lineWidth = 10
        this.context.moveTo(Utils.getXPixel(this.canvas, 0, xPadding, data),
                Utils.getYPixel(this.canvas, data.values[0].Y,
                yPadding, data));

        data.values.forEach((element, index) => {
            this.context.moveTo(Utils.getXPixel(this.canvas, index, xPadding, data),
                Utils.getYPixel(this.canvas, data.values[0].Y,
                0, data));

            this.context.lineTo(Utils.getXPixel(this.canvas, index, xPadding, data),
                Utils.getYPixel(this.canvas, element.Y, yPadding, data));
        });

        this.context.stroke();
    }
}
