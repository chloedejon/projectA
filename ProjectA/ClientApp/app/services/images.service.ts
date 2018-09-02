import { Injectable, Inject } from "../../../node_modules/@angular/core";
import { Http } from "../../../node_modules/@angular/http";
import { Observable } from "../../../node_modules/rxjs";

@Injectable()
export class ImagesService {

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {}

    getImages(): Observable<Array<Image>> {
        return this.http.get(this.baseUrl + 'api/Images/GetImages')
            .map(result => { return result.json() as Image[] })
            .catch(error => { return Observable.throw(error) });
    }
}

interface Image {
    url: string,
    title: string,
    caption: string
}
