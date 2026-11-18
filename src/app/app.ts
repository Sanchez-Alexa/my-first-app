import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [ProfileCard, Header, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
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

    proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Beginner' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
