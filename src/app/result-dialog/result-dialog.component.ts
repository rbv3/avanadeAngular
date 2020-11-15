import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'spa-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent {
  formValues;
  imgSrc = 'https://www.freeiconspng.com/uploads/error-icon-28.png';
  constructor(@Inject(MAT_DIALOG_DATA) public data){
    this.formValues = data;
    if(this.formValues.favoriteAnimal == 'cat') {
      this.imgSrc = 'https://i.pinimg.com/originals/c8/27/78/c827782e12851cd2cf4c5161c4f5445a.jpg';
    }
    else if(this.formValues.favoriteAnimal == 'dog') {
      this.imgSrc = 'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_3.jpg';
    }
    else if(this.formValues.favoriteAnimal == 'fox') {
      this.imgSrc = 'https://i.pinimg.com/originals/f4/56/98/f45698d7894885bc356437d8180d0fd8.jpg';
    }
    else if(this.formValues.favoriteAnimal == 'fish') {
      this.imgSrc = 'https://mundozumm.com.br/wp-content/uploads/2019/05/Peixe-Platis-6-1-696x464.jpg';
    }
  }

}
