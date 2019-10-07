import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.get(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get()', () => {
    it('should return the images$ observable', () => {
      expect(service.get()).toEqual(jasmine.any(Observable));
    });
  });
});
