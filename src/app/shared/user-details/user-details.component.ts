import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

@Input() userFirstName : String;
@Input() userLastName: string;
@Input() userStatus :string;
@Input() messageRead:string;
public firstChar:string;
  ngOnInit(): void {
    this.userFirstName[0];
  }

}
