import { Component, Input, HostListener } from '@angular/core';

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

  @HostListener("window:keydown", ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      this.navigate(false);
    }
    else if (event.key === "ArrowRight") {
      this.navigate(true);
    }
  }

  @Input() datasource: Array<Image> = [];
  selectedImage: Image;

  constructor() {
    this.selectedImage = {
      url: "init",
      title: "init",
      caption: "init"
    }
  }

  setSelectedImage(image: Image) {
    this.selectedImage = image;
  }

  navigate(forward: boolean) {
    var index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.datasource.length) {
      this.selectedImage = this.datasource[index];
    }
  }
}