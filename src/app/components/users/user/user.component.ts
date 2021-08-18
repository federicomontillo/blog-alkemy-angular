import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};
  nameCompany: any;

  constructor(private activateRoute: ActivatedRoute,
    private userService: UsersService) {
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe((resp: any) => {
        this.user = resp;
        this.nameCompany = this.user.company.name;
      });
  }
}
