import { Injectable } from '@angular/core'

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id)
  }
}

const IMAGES = [
  {'id': 1, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_01.jpg'},
  {'id': 2, 'category': 'camping', 'caption': 'View from a camping', 'url': 'assets/img/camp_01.jpg'},
  {'id': 3, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_01.jpg'}
];
