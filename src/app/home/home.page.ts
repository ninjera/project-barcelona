import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any;
  searchText='';

  constructor() {
  this.read_data();
  }
  read_data(){
  fetch('../../assets/barcelona.json').then(res => res.json())
  .then(json => {
  this.data = json;
  });
  }
  filterList(evt) {
    this.searchText=evt.detail.value;
  }
 }
 