import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from "./profile-card/profile-card";

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Alexa M. Sanchez';
  location = 'Angeles City, Pampanga';
  email = 'amsanchez@student.hau.edu.ph';
  phone = '0953-436-7187';

  profile = 'I am a 3rd year student at Holy Angel University, currently studying Web Development. I enjoy learning new technologies and finding better ways to build websites and applications that people can actually use. My goal is to become a skilled web developer who can create clean, useful, and user-friendly applications.';

  skills = [
    'Python',
    'HTML and CSS',
    'JavaScript',
    'PHP',
    'Angular'
  ];

  message = 'Welcome to my profile! Thank you for taking the time to visit my page. This section shows a small example of how Angular can respond to user actions. Feel free to click the button below to see it in action.'
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
