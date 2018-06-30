import { ElementRef } from "@angular/core";

export default class Utils {

    static drawXAndYAxises(canvasRef: ElementRef,
        xPadding: number,
        yPadding: number) {

        let canvas = canvasRef.nativeElement;
        let context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(xPadding, 0);
        context.lineTo(xPadding, canvas.height - yPadding);
        context.lineTo(canvas.width, canvas.height - yPadding);
        context.stroke();
    }

    static getMaxY(data: any): number {
        let max = 0;

        data.values.forEach(element => {
            if (element.Y > max) {
                max = element.Y;
            }
        });
        max += 10 - max % 10;
        return max;
    }

    static getXPixel(canvas: ElementRef, val: number, xPadding: number, data: any): number {
        return ((canvas.nativeElement.width - xPadding) / data.values.length) * val + (xPadding * 1.5);
    }

    static getYPixel(canvas: ElementRef, val: number, yPadding: number, data: any): number {
        return canvas.nativeElement.height - (((canvas.nativeElement.height - yPadding) / Utils.getMaxY(data)) * val) - yPadding;
    }

}