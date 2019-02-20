import { Component, OnInit } from '@angular/core';
import { UtellyService } from '../services/utelly.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private service: UtellyService) { }

  ngOnInit() {

  }

}
