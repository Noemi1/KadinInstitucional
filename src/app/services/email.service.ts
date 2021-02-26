import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailModel } from '../data/email-model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private rootUrl = `${window.location.origin}/`;
  constructor(
    private http: HttpClient,
  ) { }
  postEmail(dados: EmailModel) {
    return this.http.post(this.rootUrl + 'assets/mail.php', dados);
  }

}
