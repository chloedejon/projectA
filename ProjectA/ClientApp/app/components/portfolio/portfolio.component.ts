import { Component } from '@angular/core';
import { Image } from '../gallery/gallery.component';
import { ImagesService } from '../../services/images.service';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
    public images: Array<Image> = [];

    constructor(private imagesService:ImagesService) {
        this.imagesService.getImages().subscribe((result: Array<Image>) => {
            this.images = result;
        });
    }
}
