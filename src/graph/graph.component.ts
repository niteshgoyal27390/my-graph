import { Component, ViewChild, OnInit, ElementRef, Input } from "@angular/core";
import Utils from "./utilities/graph.helper";

@Component({
    selector: 'my-graph',
    templateUrl: './graph.component.html'
})

export class GraphComponent implements OnInit {
    @ViewChild('myCanvas') canvas: ElementRef
    private chartType: string


    private context: CanvasRenderingContext2D

    constructor() {
    }

    ngOnInit(): void {
        this.chartType = this.canvas.nativeElement.getAttribute('data-chartType');
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

        this.context.strokeStyle = '#f00';
        this.context.beginPath();
        this.context.moveTo(Utils.getXPixel(this.canvas, 0, xPadding, data),
            Utils.getYPixel(this.canvas, data.values[0].Y,
                yPadding, data));

        data.values.forEach((element, index) => {
            console.log(this.chartType);
            switch (this.chartType) {
                case 'linear':
                    this.context.lineTo(Utils.getXPixel(this.canvas, index, xPadding, data),
                        Utils.getYPixel(this.canvas, element.Y, yPadding, data));
                    break;
                case 'bar':
                    this.context.lineWidth = 10
                    this.context.moveTo(Utils.getXPixel(this.canvas, index, xPadding, data),
                        Utils.getYPixel(this.canvas, data.values[0].Y,
                            0, data));
                    this.context.moveTo(Utils.getXPixel(this.canvas, index, xPadding, data),
                        Utils.getYPixel(this.canvas, data.values[0].Y,
                            0, data));
                default:
                    this.context.moveTo(Utils.getXPixel(this.canvas, index, xPadding, data),
                        Utils.getYPixel(this.canvas, data.values[0].Y,
                            0, data));
                    break;
            }
            this.context.lineTo(Utils.getXPixel(this.canvas, index, xPadding, data),
                Utils.getYPixel(this.canvas, element.Y, yPadding, data));
        });

        this.context.stroke();
    }
}
