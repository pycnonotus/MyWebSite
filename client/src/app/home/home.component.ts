import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor() {}
    @ViewChild('canvasRain', { static: true })
    canvas: ElementRef<HTMLCanvasElement>;
    private maxParticles = 150;
    private ctx: CanvasRenderingContext2D;
    private particles: {
        x: number;
        y: number;
        l: number;
        xs: number;
        ys: number;
    }[] = [];
    ngOnInit(): void {
        this.initCanvas();
        setInterval(() => {
            this.drawCanvas();
            this.moveRain();
        }, 50);
    }
    private initCanvas(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.canvas.nativeElement.width = w;
        this.canvas.nativeElement.height = h;

        console.log(w, h);
//3f51b5
        this.ctx.strokeStyle = 'rgba(63,81,181,1)';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 1;

        let init = [];
        for (let i = 0; i < this.maxParticles; i++) {
            init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 0.1,
                xs: -1 + Math.random() * 2 ,
                ys: Math.random() * 4 + 5,
            });
        }
        this.particles = init;
        console.log(':)');
    }
    private drawCanvas() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.ctx.clearRect(0, 0, w, h);
        for (const p of this.particles) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x + p.xs, p.y + p.ys);
            this.ctx.stroke();
        }
    }
    private moveRain(): void {
        const w = window.innerWidth;
        const h = window.innerHeight;
        for (const p of this.particles) {
            p.x += p.xs;
            p.y += p.ys;
            if (p.x > w || p.y > h) {
                p.x = Math.random() * w;
                p.y = -20;
            }
        }
    }
    scrollTo(el: HTMLElement) {
        el.scrollIntoView();
    }
}
