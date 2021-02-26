import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // AOS.init({
    //   easing: 'ease-out-back',
    //   duration: 3000
    // });
  }

  toggleAccordion(el: object) {

    if ($(el).hasClass('active')) {
      $('.accordion__item-content').slideUp(400);
      $('.faq__accordion-item').removeClass('active');
      $(el).children('.accordion__item-content').slideUp(400);
      $(el).removeClass('active');
    } else {
      $('.accordion__item-content').slideUp(400);
      $('.faq__accordion-item').removeClass('active');
      $(el).children('.accordion__item-content').slideDown(400);
      $(el).addClass('active');

    }

  }

}
