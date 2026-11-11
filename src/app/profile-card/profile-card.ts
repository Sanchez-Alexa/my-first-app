import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'About Me';
  description = 'I am a student who is learning to build modern web applications with Angular. I started with the basics of Python, HTML, CSS, and JavaScript, and I am now exploring how components, data, and user interaction work together in a real project. I enjoy the process of turning an idea into something that works on the screen, even when it takes a lot of trial and error. Every project teaches me something new, and I am always looking for ways to improve.';
}
