import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  template: `
  <hr>
  <div class='app-server'></div>
  <div class='app-server'></div>
  <div class='app-server'></div>`,
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
