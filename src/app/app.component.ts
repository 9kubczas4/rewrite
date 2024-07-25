import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'lts-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-ssr';

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    console.log(`AppComponent: ${platformId}`)
  }

  ngOnInit(): void {
    console.log(`AppComponent: ${this.title}`)
  }

}
