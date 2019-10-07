import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Image } from './image';
import config from '../config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  get(): Observable<Image[]> {
    this.fetchImages(1, true);
    this.fetchImages(1, false);
    return this.images.asObservable();
  }

  fetchImages(page: number, isInitialFetch: boolean) {
    const perPage = isInitialFetch ? 100 : 500;
    const queryString = [
      'api_key=' + config.apiKey,
      'text=' + config.searchQuery,
      'sort=relevance',
      'method=flickr.photos.search',
      'extras=url_s',
      'page=' + page,
      'per_page=' + perPage,
      'format=json',
      'nojsoncallback=1'
    ].join('&')
    const url = 'https://api.flickr.com/services/rest/?' + queryString;

    this.http.get(url)
      .subscribe(({ photos: { photo } }: any) => {
        const images = photo
          .filter(({ height_s }) => height_s >= 160 && height_s <= 180)
          .map(({ url_s }) => {
            return {
              src: url_s
            }
          });
          const nextValue = this.images.getValue().concat(images);
          this.images.next(nextValue);

          if (!isInitialFetch && nextValue.length < 10000) {
            this.fetchImages(page + 1, isInitialFetch);
          }
        });
  }
}
