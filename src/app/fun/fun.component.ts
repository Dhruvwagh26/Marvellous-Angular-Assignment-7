import { Component } from '@angular/core';

@Component({
  selector: 'app-fun',
  standalone: true,
  imports: [],
  templateUrl: './fun.component.html',
  styleUrl: './fun.component.css'
})
export class FunComponent {
  public Name : string = "";
  public Func1()
  {
    return "Hello, from inside function, to Marvellous Infosystem Family.";
  }

}
