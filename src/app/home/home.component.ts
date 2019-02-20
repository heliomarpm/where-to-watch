import { FormsModule, FormArray, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UtellyService } from '../services/utelly.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response: any;
  constructor(private service: UtellyService) { }

  ngOnInit() {
  }

  search(fromObject) {
    this.service.lookup(fromObject.searchName).subscribe(response => {
      this.response = response;
      console.log(response);
    });
  }
}
