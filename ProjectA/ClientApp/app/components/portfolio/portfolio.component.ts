import { Component } from '@angular/core';
import { Image } from '../gallery/gallery.component';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
    public images: Array<Image>;

    constructor() {
        this.images = [
            {
                url: "Images/img1.jpg",
                title: "Guitar",
                caption: "2018 - Painting"
            },
            {
                url: "Images/img2.jpg",
                title: "Image2",
                caption: "2018 - Painting"
            },
            {
                url: "Images/img3.jpg",
                title: "Image 3",
                caption: "2018 - Painting"
            },
            {
                url: "Images/img4.jpg",
                title: "Image 4",
                caption: "2018 - Painting"
            },
            {
                url: "Images/img5.jpg",
                title: "Image 5",
                caption: "2018 - Painting"
            },
            {
                url: "Images/img6.jpg",
                title: "Image 6",
                caption: "2018 - Painting"
            },
            {
                url: "Images/img7.jpg",
                title: "Image 7",
                caption: "2018 - Painting"
            },
        ]
    }
}