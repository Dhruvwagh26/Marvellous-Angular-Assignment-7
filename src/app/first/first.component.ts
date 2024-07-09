import { Component } from '@angular/core';
import { SecongComponent } from '../secong/secong.component';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecongComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
