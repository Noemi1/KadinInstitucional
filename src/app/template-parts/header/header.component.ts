import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Scroll em ancoras da pagina 
  scrollToSection(section: string) {
    if ($(section).offset() != undefined) {
      let header = $('.header').height();
      header = header == undefined || null ? 0 : header;
      $('html, body').animate({
        scrollTop: $(section).offset().top - header,
      }, '300');
    }
  };

}
