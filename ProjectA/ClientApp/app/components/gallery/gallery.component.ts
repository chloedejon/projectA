import {Component, Input} from '@angular/core';

export interface Image {
  url: string,
  title: string,
  caption: string
}

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent { 
 
   @Input() datasource: Array<Image> = [];
   selectedImage: Image;

   constructor() {
     this.selectedImage = {
       url: "init",
       title: "init",
       caption: "init"
     }
   }
 
   setSelectedImage(image: Image){
      this.selectedImage = image;
   }
}