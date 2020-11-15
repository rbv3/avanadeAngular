import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'spa-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  simpleForm;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) {
    this.simpleForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      message: new FormControl('', [
        Validators.required,
      ]),
      showImg: false,
      favoriteAnimal: 'cat'
    });
  }

  hideCurrent = true;

  // nameFormControl = 
  // messageFormControl = new FormControl('', [
  //   Validators.required,
  // ]);

  matcherName = new MyErrorStateMatcher();
  matcherMessage = new MyErrorStateMatcher();

  ngOnInit() {
  }

  toggleHide(e) {
    console.log(e)
    this.hideCurrent = !this.hideCurrent;
  }

  handleForm(values) {
    // $('#usernameInput').focus().blur();
    // $('#passInput').focus().blur();
    console.log(this.simpleForm.status)
    if(this.simpleForm.status == 'VALID') {
      this.openDialog(values);
    }
  }
  
  openDialog(v) {
    console.log(v)
    this.dialog.open(ResultDialogComponent, {
      data: v,
    });
  }
}
