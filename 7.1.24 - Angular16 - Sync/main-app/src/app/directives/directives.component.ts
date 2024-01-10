import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  // -- MODEL
  isActive = false;
  items: Item[] | undefined;
  currentItem: Item | undefined;
  
  constructor() {
  
  }

  ngOnInit() {
    this.currentItem = new Item(1,"item name","feature","url.com",5);
    this.createItems();
  }

  createItems(){
    this.items = [
      new Item(1, "Ball", "no-extra-feature", "b.com", 4),
      new Item(2, "T shirt", "extra", "t.com", 5),
      new Item(3, "Computer", "future-extra", "c.com", 7),
      new Item(4, "Book", "future-extra", "book.com", 3),
      new Item(5, "Smartphone", "extra", "phone.com", 9),
      new Item(6, "Headphones", "extra", "audio.com", 6),
      new Item(7, "Watch", "no-extra-feature", "watch.com", 8),
      new Item(8, "Backpack", "lightweight", "bag.com", 5),
      new Item(9, "Sunglasses", "UV-protection", "glasses.com", 4),
      new Item(10, "Shoes", "comfortable", "shoes.com", 7)
   ];
  }


  // -- CONTROL
  toggleActive() {
    this.isActive = !this.isActive;
  }
}
