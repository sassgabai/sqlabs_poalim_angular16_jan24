import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstName: string = 'John';
  lastName: string = 'Sagi';
  email: string = 'me@tomersagi.com';
  isSaved: boolean = false;

  message = `I'm a message from AppComponent`;
  fontColor = 'blue';
  isDisabled = false;
  like = '';

  currentClasses: Record<string, boolean> = {};
  canSave = true
  isSpecial = true;
  isUnchanged = true;

  currentItem: Item;

  constructor() {
    this.currentItem = new Item(0, "", "", "", 0);
  }
  
  sayMessage() {
    alert(this.message);
  }

  likeChanged(select:object) {
    console.log("modelchanged => select is :  " + select);
    console.log("modelchanged => like is :  " + this.like);
    //this.like is 2 way binding
  }

  save() {
    this.isSaved = !this.isSaved;

    this.canSave = !this.canSave;
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': this.isSpecial
    };
  }

  ngOnInit(): void {
    this.setCurrentClasses();
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
