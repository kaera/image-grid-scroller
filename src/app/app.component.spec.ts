import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TileComponent } from './tile/tile.component';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GalleryComponent,
        TileComponent
      ],
      imports: [
        HttpClientModule,
        VirtualScrollerModule
      ]
    }).compileComponents();
  }));

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'image-grid-scroller'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('image-grid-scroller');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Loading...');
  });
});
