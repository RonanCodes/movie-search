import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent],
  selector: 'mose-root',
  template: '<mose-home></mose-home>',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
