import { Injectable } from '@angular/core';
import { GlobalService } from '../shared/global.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  url = ' https://api.thecatapi.com/v1/images/search';

  constructor(private globalService: GlobalService) { }

  getRandomCatImg() {
    return this.globalService.get(this.url).toPromise();
  }
}
