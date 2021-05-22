import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-worksite',
  templateUrl: './description-worksite.page.html',
  styleUrls: ['./description-worksite.page.scss'],
})
export class DescriptionWorksitePage implements OnInit {
  images:any = new Array();

  constructor() { }

  ngOnInit() {
  }

  addImage(){
    console.log("hey");
    this.images.push(this.images[this.images.length - 1] + 1);
    console.log(this.images[this.images.length -1] + 1);
  }

  remove(index:number){
    console.log(1);
    this.images.splice(index, 1);
  }

}
