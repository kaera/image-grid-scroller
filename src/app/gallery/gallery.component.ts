import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../image';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images$: Observable<Image[]>

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images$ = this.imageService.get();
  }

}
