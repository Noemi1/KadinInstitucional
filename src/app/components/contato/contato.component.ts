import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { ToastrService } from 'ngx-toastr';
import { EmailModel } from 'src/app/data/email-model';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  iconPhone = faPhoneAlt;
  IconEmail = faEnvelope;
  mensagem: EmailModel = {
    Nome: '',
    Email: '',
    Mensagem: '',
  }
  constructor(
    private emailService: EmailService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
  }


  // Formulario de enviar um email
  enviarEmail(form: NgForm) {
    if (form.valid) {
      this.emailService.postEmail(form.value)
        .subscribe(
          res => {
            console.log('res: ', res);
            this.toastrService.success('Seu contato foi enviado e em breve entraremos em contato!!', '');
          },
          err => {
            console.log('err: ', err);
            this.toastrService.error(
              `Erro`,
              `Poxa, que pena que isso aconteceu!! Você ainda pode entrar em contato
              conosco pelo whatsapp ou pelo email`);
          });
    } else {
      this.toastrService.error(
        `Erro`,
        `Os campos do formulário estão inválidos. Preencha corretamente e tente novamente.`);
    }

  };
}
