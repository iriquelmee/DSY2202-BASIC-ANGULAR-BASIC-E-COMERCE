import { Component } from '@angular/core';
import {about} from '../../../../data/index';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  title :string=about.title;
  subtitle :string=about.subtitle;

  selectedMenu:number=0;

  items : any[] = about.items;
  activeItem: string = about.items[0].title

  isActive(item:string): boolean
  {
    return this.activeItem ===item;
  }

  clickNav(item:any)
  {
    this.selectedMenu = item.id;
    this.activeItem = item.title
  }

}
