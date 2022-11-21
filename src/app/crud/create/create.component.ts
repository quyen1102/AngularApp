import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  emailForm?: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public emailService: EmailService
  ) {}
  submitForm() {
    this.emailService.create(this.emailForm?.value).subscribe((res) => {
      console.log('Created');
      this.router.navigateByUrl('crud/home');
    });
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      emailCc: [''],
      ngayTao: [''],
      chucNang: [''],
      ngayGui: [''],
      trangThaiGui: [''],
      emailTo: [''],
    });
  }
}
