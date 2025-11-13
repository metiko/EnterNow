import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms'; 
import { Admin } from '../../services/admin';
import { IStaff } from '../../interfaces/staff';
// import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  address: string;
  staffId?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', email: 'hydrogen@example.com', address: '123 H2 St', staffId: 'S12345'},
  {id: 2, name: 'Helium', email: 'helium@example.com', address: '123 He St', staffId: 'S12346'},
  {id: 3, name: 'Lithium', email: 'lithium@example.com', address: '123 Li St', staffId: 'S12347'},
  {id: 4, name: 'Beryllium', email: 'beryllium@example.com', address: '123 Be St', staffId: 'S12348'},
  {id: 5, name: 'Boron', email: 'boron@example.com', address: '123 B St', staffId: 'S12349'},
  {id: 6, name: 'Carbon', email: 'carbon@example.com', address: '123 C St', staffId: 'S12350'},
  {id: 7, name: 'Nitrogen', email: 'nitrogen@example.com', address: '123 N St', staffId: 'S12351'},
  {id: 8, name: 'Oxygen', email: 'oxygen@example.com', address: '123 O St', staffId: 'S12352'},
  {id: 9, name: 'Fluorine', email: 'fluorine@example.com', address: '123 F St', staffId: 'S12353'},
  {id: 10, name: 'Neon', email: 'neon@example.com', address: '123 Ne St', staffId: 'S12354'},
];


@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.html',
  styleUrls: ['./signin.css'],
})

export class Signin {
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'staffId'];
  dataSource!: IStaff[];

  constructor (private adminService:  Admin) {}
  ngOnInit(): void {
    this.onGetSignIn(); 
}
  onGetSignIn(){
    this.adminService.getStaff().subscribe((res)=>{
      this.dataSource = res;
    });
  }
}
