import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Processos } from 'src/app/data/processo';
import * as $ from 'jquery';

import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit, AfterViewInit {

  processos = Processos;
  arrow = faCaretLeft;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // console.log($('.processo__mapa-item').last())

  }
}
