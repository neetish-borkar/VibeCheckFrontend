import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router) { }

  title:any;
  artist1:any;
  artist2:any;
  genre:any;

  ngOnInit(): void {
  }

  uploadFile(){
    const selectedFileList : any = (<HTMLInputElement>document.getElementById('file')).files; 
    const file = selectedFileList.item(0); 
    let formData = new FormData(); 

    formData.append('Sname',this.title);
    formData.append('artist1',this.artist1);
    formData.append('artist2',this.artist2);
    formData.append('genre',this.genre);
    formData.append("file", file); 

    console.log(formData.getAll('Sname'))
   
    this.http.post('http://127.0.0.1:5000/addsong',formData).subscribe((data:any)=>{
        if(data.status == "Song Matched with a song already in the database"){
          alert("Error : Song Matched with a song already in the database")
        } 
        else if(data.status == "Song with this name and artist is already in the database"){
          alert("Song with this name and artist is already in the database")
        }
        else if (data.status == "Song fingerprints Inserted"){
          alert("Success : Song uploaded successfully!");
          this.router.navigateByUrl('/home')
        }
    },error=>{
      console.log(error)
      alert("Error : Service error while uploading song. Please re-upload!")
    });
  }
  goBack(){
    this.router.navigate(['home'])
  }
}
