import { Component, OnInit } from '@angular/core';
import { servicos } from 'src/app/data/servicos';
import * as AOS from 'aos';
import * as $ from 'jquery';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos = servicos;
  constructor() { }

  ngOnInit(): void {
    // AOS.init({
    //   easing: 'ease-out-back',
    //   duration: 3000
    // });
  }

}
