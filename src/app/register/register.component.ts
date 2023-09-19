import { Component } from '@angular/core';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Angularda => two way data binding => TS ve HTML dosyalarındaki verilerin eş zamanlı ilerlemesi
  name: string = 'abc';
  job: string = '';
  acceptTerms: boolean = true;

  submit() {
    if (this.name == '') {
      // required hatası
    } else if (this.name.length < 3) {
      // minLength hatası
    }

    let request = {
      name: this.name,
      job: this.job,
      acceptTerms: this.acceptTerms,
    };

    console.log(request);
  }
}
