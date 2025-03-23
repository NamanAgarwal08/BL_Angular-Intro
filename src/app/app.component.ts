import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = "Hello from BridgeLabz!";

  logoUrl = "https://media.glassdoor.com/sqll/1318507/bridgelabz-solutions-squarelogo-1576063675737.png";

  userName = "";

  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com/", "_blank");
  }
}
