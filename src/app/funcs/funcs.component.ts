import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcs',
  templateUrl: './funcs.component.html',
  styleUrls: ['./funcs.component.css']
})
export class FuncsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
