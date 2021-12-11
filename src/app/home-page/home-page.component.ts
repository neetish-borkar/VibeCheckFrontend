import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  

  ngOnInit(): void {
  }

  constructor(private router : Router){


  }

  addSong(){
    this.router.navigate(['add-song'])
  }

  checkSong(){
    this.router.navigate(['check-song'])
  }
}
