import { Component, OnInit } from '@angular/core';
import { Title } from '../title';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: Title = {id: 1, name: 'Painel de uso e estatísticas'};

  constructor() { }

  ngOnInit() {
  }

}
