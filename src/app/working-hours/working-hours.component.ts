import { Component } from '@angular/core';


export interface PeriodicElement {
  user: string;
  position: string;
  signIn: string;
  signOut: string;
  hours: number;
  hoursTotal: number;
  status: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {user: 'AK', position: 'ACC', signIn: '2024-05-15 08:00:00', signOut: '2024-05-15 16:00:00', hours: 8, hoursTotal: 160, status: 'Ispunjen'},
  {user: 'AK', position: 'ACC', signIn: '2024-05-16 08:00:00', signOut: '2024-05-16 16:00:00', hours: 8, hoursTotal: 159, status: 'Ispunjen'},
  {user: 'AK', position: 'ACC', signIn: '2024-05-18 08:00:00', signOut: '2024-05-18 16:00:00', hours: 8, hoursTotal: 130, status: 'Neispunjen'},
  {user: 'AK', position: 'ACC', signIn: '2024-05-19 08:00:00', signOut: '2024-05-19 16:00:00', hours: 8, hoursTotal: 153, status: 'Ispunjen'},
  {user: 'AK', position: 'ACC', signIn: '2024-05-20 08:00:00', signOut: '2024-05-20 16:00:00', hours: 8, hoursTotal: 156, status: 'Ispunjen'},
  {user: 'AK', position: 'ACC', signIn: '2024-05-22 08:00:00', signOut: '2024-05-22 16:00:00', hours: 8, hoursTotal: 132, status: 'Neispunjen'}
];

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrl: './working-hours.component.scss'
})
export class WorkingHoursComponent {

  displayedColumns: string[] = ['user', 'position', 'signIn', 'signOut',  'hours',  'hoursTotal',  'status'];
  dataSource = ELEMENT_DATA;
}
