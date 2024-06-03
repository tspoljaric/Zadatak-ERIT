import { Component } from '@angular/core';

interface Message {
  avatar: string;
  title: string;
  content: string;
  time: string;
}

interface Hours {
  time: string;
}

interface Months {
  month: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  messages: Message[] = [
    {
      avatar: 'images/usr4.png',
      title: 'Ažuriranje sigurnosnih postavki',
      content: 'Svi korisnici trebaju ažurirati svoje...',
      time: '10:00',
    },
    {
      avatar: 'images/usr3.png',
      title: 'Novi protokoli za prijavu',
      content: 'Od ponedjeljka će se...',
      time: '13:00',
    },
    {
      avatar: 'images/usr2.png',
      title: 'Ažuriranje sustava u petak',
      content: 'Planirano je ažuriranje sustava u...',
      time: '17:00',
    },
    {
      avatar: 'images/usr4.png',
      title: 'Sastanak tima u 14:00',
      content: 'Molimo sve kontrolore da...',
      time: '06:00',
    },
    {
      avatar: 'images/usr1.png',
      title: 'Danas je rok za unos radnih sati',
      content: 'Podsjećamo sve članove tima...',
      time: '08:00',
    },
    {
      avatar: 'images/usr2.png',
      title: 'Planirano održavanje sustava',
      content: 'Planirano je ažuriranje sustava...',
      time: '10:00',
    },
    {
      avatar: 'images/usr5.png',
      title: 'Nova procedura za prijavu',
      content: 'Od ponedjeljka se primjenjuje...',
      time: '14:00',
    },

  ];

  hours: Hours[] = [
    { time: '200' },
    { time: '160' },
    { time: '140' },
    { time: '100' }
  ]

  months: Months[] = [
    { month: '01.' },
    { month: '02.' },
    { month: '03.' },
    { month: '04.' },
    { month: '05.' },
    { month: '06.' },
    { month: '07.' },
    { month: '08.' },
    { month: '09.' },
    { month: '10.' },
    { month: '11.' },
    { month: '12.' }
  ]

  constructor() { }

}
