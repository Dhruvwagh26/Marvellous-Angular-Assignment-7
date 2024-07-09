import { Component } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  standalone: true,
  imports: [],
  templateUrl: './characteristics.component.html',
  styleUrl: './characteristics.component.css'
})
export class CharacteristicsComponent {
  public Name:string = "Marvellous inside Characteristic component";

  public UPPER() {
    this.Name = this.Name.toUpperCase();
  }

  public Lower() {
    this.Name = this.Name.toLowerCase();
  }
}
