import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showBtnScrollTop = false;
  constructor() { }

  ngOnInit(): void {
    this.mostrarBtnScrollTop();

  }

  mostrarBtnScrollTop() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 80) {
        this.showBtnScrollTop = true;
      } else {
        this.showBtnScrollTop = false;
      }
      return this.showBtnScrollTop;
    });
  }
  scrollTop() {
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  }

}
