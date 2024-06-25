import { Component, OnInit } from '@angular/core';
import {nav} from '../../../../data/index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  title:string='Table Top Games 2024';
  footerNav : any[]  | undefined;

  ngOnInit()
  {
    this.loadNavbar();
  }

  loadNavbar()
  {
    try 
    {
      if(nav != undefined)
      {
        this.footerNav = nav;
      } 
    } catch (ex) 
    {
      console.log(ex);
    }
  }
}
