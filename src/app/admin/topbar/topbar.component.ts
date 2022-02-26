
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'src/app/cookie.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router:Router,private cookie:CookieService){}

  ngOnInit(): void {
      
  }

  logout(){
      this.cookie.delete("usertype");
      this.cookie.delete("name");
      this.cookie.delete("authkey");
      this.router.navigate(["/"]);
  }

  redirect(path:string){
      alert(path);
      this.router.navigate([path]);
  }
}

