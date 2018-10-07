import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    url = "Images/anton.jpg";
    description = "I am an illustrator and artist living in Gothenburg, Sweden. Drawing and illustrating, which later expanded into digital art, has always been my main interest. As of now it is not my full time job, which I would like to do something about. Currently I am looking for work opportunities, both in illustration and concept art or other forms of digital painting. If you are interested in my work, please see";
}