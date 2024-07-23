import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ModalTestComponent} from './modal-test/modal-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
}
