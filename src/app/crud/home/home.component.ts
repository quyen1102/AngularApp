import { Email } from './../email';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  emailList: Email[] = [];
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getAll().subscribe((data: Email[]) => {
      console.log(data);
      this.emailList = data;
    });
  }
}
