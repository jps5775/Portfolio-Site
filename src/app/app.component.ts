import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  displayAboutMe(){
    var aboutMeTag = document.getElementsByClassName("example-section")[0];
    aboutMeTag.scrollIntoView();
  }
  
  displayResume(){
    var resumeTag = document.getElementsByClassName("example-section")[1];
    resumeTag.scrollIntoView();
  }

  displayProjects(){
    var projectsTag = document.getElementsByClassName("example-section")[2];
    projectsTag.scrollIntoView();
  }

}
