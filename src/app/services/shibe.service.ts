import { Injectable } from '@angular/core';
import { GlobalService } from '../shared/global.service';

@Injectable({
  providedIn: 'root'
})
export class ShibeService {
  url = 'http://shibe.online/api/shibes';

  constructor(private globalService: GlobalService) { }

  getShibeImg(number) {
    this.globalService.get(this.url + '?count=' + number + '&urls=true&httpsUrls=true').toPromise();
  }
}
