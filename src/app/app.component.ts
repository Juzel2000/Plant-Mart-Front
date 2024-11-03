import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlantMart-Front';



  @ViewChild('sidebar') sidebar!: ElementRef;

  hideSidebar() {
    // if (this.sidebar) {
    //   this.sidebar.nativeElement.style.display = 'none';
    // }
    const element = <HTMLElement> document.getElementsByClassName('sidebar')[0];
    element.style.display = 'none';

  }




}
