import { Component, OnInit } from '@angular/core';
import { PostForListingModel } from '../models/postForListingModel';
import { PostService } from '../services/post.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.createLoginForm();
  }

  // getter-setter
  get formControls() {
    return this.formGroup.controls;
  }

  hasValidationError(formControlName: string, errorName: string) {
    let errors = this.formControls[formControlName].errors;

    if (errors == null) return false;

    return errors[errorName];
  }

  createLoginForm() {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]), // 1. param => Formdaki bu alanın başlangıç değeri
      // 2. param => validasyonlar
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  submit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
    // HTTP isteği?
  }
}
