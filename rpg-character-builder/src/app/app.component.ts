import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">

      <header class="header">
        <h1>⚔️ RPG Character Builder ⚔️</h1>
      </header>

      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Characters</a>
        <a href="#">Inventory</a>
        <a href="#">Skills</a>
      </nav>

      <main class="main">
        <router-outlet></router-outlet>
      </main>

      <footer class="footer">
        <nav>
          <a href="#">Home</a> |
          <a href="#">Characters</a> |
          <a href="#">Inventory</a> |
          <a href="#">Skills</a>
        </nav>
        <p>© 1997 RPG Guild</p>
      </footer>

    </div>
  `,
  styles: [`
    .wrapper {
      background-color: #0a0a0a;
      color: #e0e0e0;
      min-height: 100vh;
    }

    .header {
      background: linear-gradient(to right, #2b1055, #7597de);
      padding: 20px;
      text-align: center;
      font-family: 'Courier New';
      border-bottom: 2px solid #00ffcc;
    }

    .nav {
      background: #111;
      padding: 10px;
      text-align: center;
      border-bottom: 2px solid #00ffcc;
    }

    .nav a {
      color: #00ffcc;
      margin: 10px;
      text-decoration: none;
      font-family: 'Verdana';
    }

    .nav a:hover {
      color: #ffcc00;
    }

    .main {
      padding: 20px;
      font-family: 'Georgia';
    }

    .footer {
      background: #111;
      color: #aaa;
      text-align: center;
      padding: 20px;
      border-top: 2px solid #00ffcc;
    }

    .footer a {
      color: #00ffcc;
      text-decoration: none;
    }
  `]
})
export class AppComponent {}
