import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector:  'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls:  ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() username: string;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }
}

