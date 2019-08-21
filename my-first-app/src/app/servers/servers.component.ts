import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //by element
  //selector: '[app-server]'  //by attribute
  //selector: '.app-server'   //by class
  templateUrl : './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
  //styles : ['h3{color: red;}']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ="No server was created";
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created and Server name: "+ this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
