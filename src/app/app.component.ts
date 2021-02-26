import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

import * as $ from 'jquery';
import { redesSociais } from './data/redes-sociais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KadinInstitucional';
  redes = redesSociais;
  ngOnInit(): void {

    setTimeout(() => { this.bubbles() }, 50)
    setTimeout(() => { this.bubbles() }, 500)
    setInterval(() => { this.bubbles() }, 6500)

  }

  bubbles() {
    $('.elemento-flutuante').each(function () {
      let top = (Math.random() * (100 - 0) + 0);
      let left = (Math.random() * (100 - (-50)) + (-50));
      $(this).css({
        top: parseInt(top.toString()) + '%',
        left: parseInt(left.toString()) + '%'
      });
    });
  }
}
