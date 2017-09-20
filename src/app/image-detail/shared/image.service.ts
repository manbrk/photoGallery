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
  {'id': 1, 'category': 'guitar', 'caption': 'guitar', 'url': 'http://images.equipboard.com/uploads/item/image/13606/gibson-flying-v-white-xl.jpg?v=1500058904'},
  {'id': 2, 'category': 'bike', 'caption': 'bike', 'url': 'http://cs5.pikabu.ru/post_img/2015/12/04/8/144923515311947397.jpg'},
  {'id': 3, 'category': 'city', 'caption': 'city', 'url': 'http://media.cntraveler.com/photos/5491ddea860c74c1162cae33/4:3/w_775,c_limit/city-guide-new-york-main-image-2014.jpg'},
  {'id': 4, 'category': 'guitar', 'caption': 'guitar', 'url': 'http://songsonguitar.com/wp-content/uploads/2013/12/electric-guitar-wallpaper-1024x752.jpg'},
  {'id': 5, 'category': 'guitar', 'caption': 'guitar', 'url': 'http://cdn.wallpapersafari.com/24/57/PlDXKu.jpg'},
  {'id': 6, 'category': 'guitar', 'caption': 'guitar', 'url': 'http://cdn.wallpapersafari.com/6/6/HW0bKZ.jpeg'},
  {'id': 7, 'category': 'guitar', 'caption': 'guitar', 'url': 'https://images.designtrends.com/wp-content/uploads/2016/01/12101034/Black-and-White-Guitar-Wallpaper.jpg'},
  {'id': 8, 'category': 'guitar', 'caption': 'guitar', 'url': 'http://www.omgubuntu.co.uk/wp-content/uploads/2014/03/Ibanez-Infinity-Jaco-Kok.jpg'},
  {'id': 9, 'category': 'bike', 'caption': 'bike', 'url': 'http://kickstart.bikeexif.com/wp-content/uploads/2016/01/cb-cafe-racer-1-625x417.jpg'},
  {'id': 10, 'category': 'bike', 'caption': 'bike', 'url': 'http://static.highsnobiety.com/wp-content/uploads/2016/05/06111341/diamond-atelier-mark-II-000.jpg'},
  {'id': 11, 'category': 'bike', 'caption': 'bike', 'url': 'http://www.pipeburn.com/wp-content/uploads/2017/05/25_05_2017_Motorelic_Honda_CB750_Cafe_Racer_custom_pipeburn_moto_01.jpg'},
  {'id': 12, 'category': 'bike', 'caption': 'bike', 'url': 'http://cdn.silodrome.com/wp-content/uploads/2012/12/Yamaha-XS750-Cafe-Racer-5.jpg'},
  {'id': 13, 'category': 'bike', 'caption': 'bike', 'url': 'http://forumfoundrycdn.com/miker/Ducati/MY2015/Scrambler/DirtTrackConcept/ducati-scrambler-dirt-track-concept-is-one-evil-machine-photo-gallery_2.jpg'},
  {'id': 14, 'category': 'city', 'caption': 'city', 'url': 'http://assets.fodors.com/destinations/1128/skyline-manhattan-new-york-city-new-york-usa_main.jpg'},
  {'id': 15, 'category': 'city', 'caption': 'city', 'url': 'https://www.city.ac.uk/__data/assets/image/0009/328797/building-partnerships.jpg'},
  {'id': 16, 'category': 'city', 'caption': 'city', 'url': 'https://www.pwc.com/us/en/cities-of-opportunity/2016/toronto_555x312.jpg'},
  {'id': 17, 'category': 'city', 'caption': 'city', 'url': 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivg2OuD7PhMA/v0/800x-1.jpg'}
];
