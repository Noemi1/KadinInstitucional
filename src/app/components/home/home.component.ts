import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  sliderString = `
    
    <script>
        $('.banner__slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 600,
          autoplay: true,
          autoplaySpeed: 7000,
          prevArrow: $('.banner__slick-arrow.slick-prev'),
          nextArrow: $('.banner__slick-arrow.slick-next'),
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        });
    </script>
  
  `;

  home = false;

  constructor() { }

  ngOnInit(): void {
    // Animação Header
    $(window).on('scroll', () => {
      let scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
      }
    })

    AOS.init({
      duration: 400,
    });

    setTimeout(() => {
      $('.before-load').fadeOut(1000);
      $('.home').fadeIn(700);
    }, 700)

  }

  ngAfterViewInit(): void {
    $('.sliderScriptBanner').append(this.sliderString);

  }




}
