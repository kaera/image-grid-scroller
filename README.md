# ImageGridScroller

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Summary of implementation approach

### Data source

I've chosen Flickr API for images source as suggested in the assignment.
As there were no specific requirements about the logic (e.g. to implement an infinite scroll when new data loads while the user is approaching the bottom of the page), I've decided to download all the data at once with a couple limitations:
- The Flickr API allows to download maximum 500 images per request. So, to reach the number 10000 images, I need to send 20 requests
- The API is not very fast, so for the first request I've decided to load a smaller number of images (e.g. 100) to show them as fast as possible, and then load the rest in the background.

### Layout

For the gallery container I've decided to use npx-virtual-scroller plugin which implements virtual scroll pattern: when you display only a small subset of records just enough to fill the viewport and use the same DOM elements as the user scrolls. That allows you to maintain high performance of the page while having 10000+ items in the gallery.
As an alternative to the plugin, I also considered scrolling module from angular cdk, but, according to the reviews, it's not as good for multicolumn layouts.

I considered three options for the gallery layout:
- flex layout
- grid layout
- just using display: inline-block for tiles
I've decided to stay with the grid layout, mainly because both flex and inline-block approaches have "align last row" issue: if the last row is not fully occupied by the tiles (e.g. in case of 10 items and 3 columns) then the tiles don't align properly.

### Steps

- Generate an ng app
- Generate an image service that will provide an observable to consumer components, and will update its data in background
- Generate a gallery component that will consume images observable and display the images
- Implement virtual scroll using npx-virtual-scroller plugin
- Finalize UI (add tooltips, animation, etc)