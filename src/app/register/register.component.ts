import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // Angularda => two way data binding => TS ve HTML dosyalarındaki verilerin eş zamanlı ilerlemesi
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      // Tüm konfigürasyonlar
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      job: new FormControl('', []),
      acceptTerms: new FormControl(false, []),
    });
  }

  submit() {
    if (this.registerForm.invalid) {
      alert('Hata var!');
    }
    console.log(this.registerForm.value);
  }
}
// Her bir alan için tek tek değişken ekleme gereksinimi ortadan kalkar.
// Tüm form elemanları tek bir değişken altında (formGroup) toplanır.
// FormGroup => Formun kendisini ifade eden bir değişken bulunur.

// FormBuilder => Kurallar (validation), ve alanları belirleyerek form group'u build eden yardımcı class.
// Alan ismi, türü, başlangıç değeri, validasyon kuralları tanımlanır.
// Form'un build edildiği life cycle => ngOnInit()

// FormControl => Formdaki her bir alanın kendisini ifade eder.
// 1. Parametre => İlgili değerin başlangıç değeri
// 2. Parametre (Opsiyonel) => validasyonlar
// Validators
