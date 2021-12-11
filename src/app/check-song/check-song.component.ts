import { HttpClient } from '@angular/common/http';
import { Component,} from '@angular/core';
import { Router } from '@angular/router';
import {TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'app-check-song',
  templateUrl: './check-song.component.html',
  styleUrls: ['./check-song.component.scss']
})
export class CheckSongComponent{
  returnObj: any;
  showLoading: any;

  constructor(private http: HttpClient, private router : Router) { }

  title: any;
  artist1: any;
  artist2: any;
  genre: any;

  uploadFile() {
    this.showLoading=true;
    const selectedFileList: any = (<HTMLInputElement>document.getElementById('file')).files;
    const file = selectedFileList.item(0);
    const formData = new FormData();
    formData.append("file", file);
    /* 
        formData.append('title',JSON.stringify(this.title));
        formData.append('artist1',JSON.stringify(this.artist1));
        formData.append('artist2',JSON.stringify(this.artist2));
        formData.append('genre',JSON.stringify(this.genre)); */
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://127.0.0.1:5000/check', formData).subscribe(data => {
      console.log(data)
      this.showLoading=false;
      this.returnObj = data;
    });
  }
  goBack(){
    this.router.navigate(['home'])
  }
  
  getTooltipText(obj:any){
    return `Name: ${obj.SONG_NAME},
    Artist: ${obj.SONG_ARTIST},
    Similarity: ${obj.INPUT_CONFIDENCE * 100}%`;
  }
}
