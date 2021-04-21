import { Component } from '@angular/core';

@Component({      // Декоратор, оболочка класса
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-basics';
}
