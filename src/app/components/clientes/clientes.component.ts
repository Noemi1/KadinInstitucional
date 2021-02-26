import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Clientes } from 'src/app/data/clientes';
import * as AOS from 'aos';
import * as $ from "jquery";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {

  clientes = Clientes;
  constructor() { }

  ngOnInit(): void {
    // AOS.init({
    //   easing: 'ease-out-back',
    //   duration: 3000
    // });
  }
  ngAfterViewInit(): void {
    $('.clientes__item:nth-child(even)').addClass('clientes__item--right');
    $('.clientes__item:nth-child(odd)').addClass('clientes__item--left');
  }

}
