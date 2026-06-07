import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../../../shared/data/content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  c = COMPANY;
  year = new Date().getFullYear();
}
