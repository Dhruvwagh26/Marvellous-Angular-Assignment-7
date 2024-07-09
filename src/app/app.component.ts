import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FunComponent } from './fun/fun.component';
//import { SecongComponent } from './secong/secong.component';
import { DemoComponent } from './demo/demo.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FirstComponent,FunComponent,DemoComponent, CharacteristicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "Appcomponent";
}
