import { Component, ViewChild, OnInit } from "@angular/core";

@Component({
    selector: 'my-graph',
    templateUrl: './graph.component.html'
})

class BarChart {
    public options: any
    public canvas: any
    public context: CanvasRenderingContext2D
    public colors: string[]

    public constructor() {
        /* this.options = options
        this.canvas = options.canvas;
        this.context = this.canvas.getContext('2d');
        this.colors = options.colors; */

    }
    draw = () => {

        console.log('alerted')
    }
}

export class GraphComponent extends BarChart implements OnInit {
    @ViewChild('myCanvas') canvas
    /* public ctx: CanvasRenderingContext2D
    public colors: string[]
    public draw: Function

    constructor(options: any) {
        this.ctx = this.canvas.getContext("2d");
        this.colors = options.colors;

        this.draw = () => {
            let maxValue = 0;
            for (let key in options.data) {
                maxValue = Math.max(maxValue, options.data[key]);
            }
            let canvasActualHeight = this.canvas.height - options.padding * 2;
            let canvasActualWidth = this.canvas.width - options.padding * 2;

            //drawing the grid lines
            let gridValue = 0;
            while (gridValue <= maxValue) {
                var gridY = canvasActualHeight * (1 - gridValue / maxValue) + options.padding;
                this.drawLine(
                    this.ctx,
                    0,
                    gridY,
                    this.canvas.width,
                    gridY,
                    options.gridColor
                );

                //writing grid markers
                this.ctx.save();
                this.ctx.fillStyle = options.gridColor;
                this.ctx.font = "bold 10px Arial";
                this.ctx.fillText(gridValue.toString(), 10, gridY - 2);
                this.ctx.restore();

                gridValue += options.gridScale;
            }

            //drawing the bars
            var barIndex = 0;
            var numberOfBars = Object.keys(options.data).length;
            var barSize = (canvasActualWidth) / numberOfBars;

            for (let categ in options.data) {
                var val = options.data[categ];
                var barHeight = Math.round(canvasActualHeight * val / maxValue);
                this.drawBar(
                    this.ctx,
                    options.padding + barIndex * barSize,
                    this.canvas.height - barHeight - options.padding,
                    barSize,
                    barHeight,
                    this.colors[barIndex % this.colors.length]
                );

                barIndex++;
            }
        } 
    } */

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        let canvas = this.canvas.nativeElement;
        let barChart = new BarChart();
        barChart.draw();
    }


    public drawLine(ctx, startX, startY, endX, endY, color) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
    }

    public drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
        ctx.restore();
    }
}

