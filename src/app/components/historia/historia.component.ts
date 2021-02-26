import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as $ from 'jquery';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // AOS.init({
    //   easing: 'ease-out-back',
    //   duration: 8000
    // });
    this.scrollAOS();
  }

  scrollAOS() {
    $('window').scroll(function (event) {
      console.log(event)
    })
  }

}
