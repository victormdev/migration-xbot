import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admfuncs',
  templateUrl: './admfuncs.component.html',
  styleUrls: ['./admfuncs.component.css']
})
export class AdmFuncsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, ) { }

  ngOnInit() {
  }

}
