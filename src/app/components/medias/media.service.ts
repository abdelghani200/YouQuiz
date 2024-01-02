import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URLS } from "src/app/config/api.url.config";
import { Media } from "src/app/shared/Media";

@Injectable({
    providedIn: 'root'
})
export class MediaService {

    constructor(private http: HttpClient)
    {

    }

    getMedias(): Observable<Media[]> {
        return this.http.get<Media[]>(API_URLS.Media_URL);
    }

    deleteMedias(id: number): Observable<Media[]> {
        return this.http.delete<Media[]>(API_URLS.Media_URL + `/${id}`)
    }

    addMedias(media: Media): Observable<Media[]> {
        return this.http.post<Media[]>(API_URLS.Media_URL, media)
    }

}