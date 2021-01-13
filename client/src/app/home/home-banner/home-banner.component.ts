import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-home-banner',
    templateUrl: './home-banner.component.html',
    styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent implements OnInit {
    @ViewChild('textWrite') textWrite;
    constructor() {
        this.initText();
    }
    private preText = "I'm a ";
    private devText = 'Web';
    private preDevText = 'Web';
    private posText = ' Developer';
    private devIndex = 0;
    private timeOut = 50;
    private otherDevText = [
        'Web',
        'Fullstack',
        'Backend',
        '.Net',
        'Angular',
        'Frontend',
    ];

    text = '';
    @Output() scrollDown = new EventEmitter();
    ngOnInit(): void {}
    private async initText() {
        setTimeout(async () => {
            const sub = this.preText.substring(0, this.text.length + 1);
            this.text = sub;
            if (this.text.length < this.preText.length) {
                this.initText();
            } else {
                this.printDev();
            }
        }, this.timeOut);
    }
    private printDev() {
        setTimeout(async () => {
            const sub =
                this.preText +
                this.devText.substring(
                    0,
                    this.text.length - this.preText.length + 1
                );
            this.text = sub;
            const maxSize = this.preText.length + this.devText.length;
            if (this.text.length < maxSize) {
                this.printDev();
            } else {
                this.printPost();
            }
        }, this.timeOut);
    }
    private printPost() {
        setTimeout(() => {
            const sub =
                this.preText +
                this.devText +
                this.posText.substring(
                    0,
                    this.text.length -
                        (this.preText.length + this.devText.length) +
                        1
                );
            this.text = sub;
            const maxSize =
                this.preText.length + this.devText.length + this.posText.length;
            if (this.text.length < maxSize) {
                this.printPost();
            } else {
                this.changeDev();
            }
        }, this.timeOut);
    }

    private async deleteDev() {
        setTimeout(() => {

            const si =
                this.text.length -
                (this.preText.length + this.posText.length + 1);

            const sub =
                this.preText + this.preDevText.substring(0, si) + this.posText;
            this.text = sub;
            const minSize = this.preText.length + this.posText.length;

            if (this.text.length > minSize) {
                this.deleteDev();
            } else {
                this.addDev();
            }
        }, this.timeOut);
    }
    private async addDev() {
        setTimeout(() => {
            const si =
                this.text.length -
                (this.preText.length + this.posText.length) +
                1;
            const sub =
                this.preText + this.devText.substring(0, si) + this.posText;
            this.text = sub;
            const maxSize =
                this.preText.length + this.devText.length + this.posText.length;
            if (this.text.length < maxSize) {
                this.addDev();
            } else {
                this.changeDev();
            }
        }, this.timeOut);
    }
    private changeDev() {
        this.preDevText = this.devText;
        this.devIndex++;
        if (this.devIndex >= this.otherDevText.length) {
            this.devIndex = 0;
        }

        this.devText = this.otherDevText[this.devIndex];

        setTimeout(() => {
            this.deleteDev();
        }, this.timeOut * 10);
    }
}
