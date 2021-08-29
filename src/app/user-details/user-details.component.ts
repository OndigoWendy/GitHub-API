import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  //public userQuery!: string;
  public githubUserQuery: string = 'Enter username here';
  @Output() searchResult = new EventEmitter<any>()
  constructor() { }

  searchUser(){
    this.searchResult.emit(this.githubUserQuery);
  }
  ngOnInit(): void {
  }
}
