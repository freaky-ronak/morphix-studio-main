import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { COMPANY } from '../../shared/data/content';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);
  c = COMPANY;
  sent = signal(false);
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    service: [''],
    message: ['', Validators.required],
  });

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    // Hook up to your backend / email service here.
    console.log('Contact submission', this.form.value);
    this.sent.set(true);
    this.form.reset();
  }
}
