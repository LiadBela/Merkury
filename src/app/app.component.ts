import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'app';

  // variable and following function for toggling sidenav
  public isOpen = true;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  // Sidenav menu items
  sidenavItems = [
    {name: 'Home', icon: '../assets/sidenav-items/home.png'},
    {name: 'Workflow', icon: '../assets/sidenav-items/workflow.png'},
    {name: 'Statistics', icon: '../assets/sidenav-items/statistics.png'},
    {name: 'Calendar', icon: '../assets/sidenav-items/calendar.png'},
    {name: 'Users', icon: '../assets/sidenav-items/users.png'},
    {name: 'Settings', icon: '../assets/sidenav-items/settings.png'}
  ];

  // List of tasks
  tasks =  [
    {desc: 'New website for Symu.co', daysFromDue: 5, isDuePast: true},
    {desc: 'Free business PSD Template', daysFromDue: 2, isDuePast: true},
    {desc: 'New logo for JCD.pl', daysFromDue: 5, isDuePast: false},
    {desc: 'Free Icons Set vol. 3', daysFromDue: 10, isDuePast: false},
  ];

  // List of messages
  messages =  [
    {
      userAvatarSrc: '../assets/avatars/nina.png',
      username: 'Nina Jones',
      content: 'Hey You! It’s me again :-) I attached new (...)',
      time: 5,
      timeFormat: 'minutes',
      isTimeAccurate: true,
      isNew: true
    },
    {
      userAvatarSrc: '../assets/avatars/nina.png',
      username: 'Nina Jones',
      content: 'Hey! I attached some new PSD files for (...)',
      time: 20,
      timeFormat: 'hours',
      isTimeAccurate: false,
      isNew: true
    },
    {
      userAvatarSrc: '../assets/avatars/james.png',
      username: 'James Smith',
      content: 'Good morning, you are fired!',
      time: 2,
      timeFormat: 'days',
      isTimeAccurate: true,
      isNew: false
    },
    {
      userAvatarSrc: '../assets/avatars/nina.png',
      username: 'Nina Jones',
      content: 'Hello! Could You bring me coffee please?',
      time: 2,
      timeFormat: 'weeks',
      isTimeAccurate: false,
      isNew: false
    },
  ];

  // List for activity timeline
  activity =  [
    {
      userAvatarSrc: '../assets/avatars/nina.png',
      username: 'Nina Jones',
      actionType: 'added a new ',
      objectType: 'project',
      objectName: 'Free UI Kit',
      time: 3,
      timeFormat: 'minutes',
    },
    {
      userAvatarSrc: '../assets/avatars/james.png',
      username: 'James Smith',
      actionType: 'commented',
      objectType: 'project',
      objectName: 'Free PSD Template',
      time: 40,
      timeFormat: 'minutes',
    },
    {
      userAvatarSrc: '../assets/avatars/alex.png',
      username: 'Alex Clooney',
      actionType: 'completed',
      objectType: 'task',
      objectName: 'Symu Website',
      time: 1,
      timeFormat: 'hour',
    },
    {
      userAvatarSrc: '../assets/avatars/alexandra.png',
      username: 'Alexandra Spears',
      actionType: 'added a new',
      objectType: 'project',
      objectName: 'Free PSD (...)',
      time: 3,
      timeFormat: 'hours',
    },
  ];
}
