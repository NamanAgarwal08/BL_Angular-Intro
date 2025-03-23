import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = "Hello from BridgeLabz";
  logoUrl = "https://media.glassdoor.com/sqll/1318507/bridgelabz-solutions-squarelogo-1576063675737.png";
  userName = '';
  nameError = '';

  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com/", "_blank");
  }

  validateName() {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (!nameRegex.test(this.userName) && this.userName.length !== 0) {
      this.nameError = "Name is incorrect!";
    } else {
      this.nameError = "";
    }
  }
}