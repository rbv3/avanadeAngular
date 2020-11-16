import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'spa-cat-images',
  templateUrl: './cat-images.component.html',
  styleUrls: ['./cat-images.component.scss']
})
export class CatImagesComponent implements OnInit {
  imgSrc1 = 'https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png';
  imgSrc2 = 'https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png';
  imgSrc3 = 'https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png';

  constructor(
    private catService: CatService,) { }

  ngOnInit(): void {
    this.getAllImgs();
  }
  reloadImgs() {
    this.getAllImgs();
  }
  getAllImgs() {
    this.catService.getRandomCatImg()
      .then(res => {
        this.imgSrc1 = res[0].url;
      })
      .catch(err => {
        console.error(err);
        this.imgSrc1 = 'https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png';
      })
    this.catService.getRandomCatImg()
      .then(res => {
        this.imgSrc2 = res[0].url;
      })
      .catch(err => {
        console.error(err);
        this.imgSrc2 = 'https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png';
      })
    this.catService.getRandomCatImg()
      .then(res => {
        this.imgSrc3 = res[0].url;
      })
      .catch(err => {
        console.error(err);
        this.imgSrc3 = 'https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png';
      })
  }

}
