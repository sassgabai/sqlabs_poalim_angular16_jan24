import { Component } from '@angular/core';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.css']
})
export class FormClassComponent {
  onSubmit(formdata: any) {
    console.log(formdata);
  }
}
