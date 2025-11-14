import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff implements OnInit {
  selectedStaff: any = null;
  showModal = false;
  
  totalSignIns: number = 0;
  totalLateness: number = 0;
  totalDeductions: number = 0;

  staffList = [
    { 
      name: 'Jane Doe', 
      id: 'STF001', 
      department: 'HR', 
      email: 'jane.doe@company.com',
      signIns: 42,
      latenessCount: 3,
      deductions: 1500,
      lastSignIn: '2025-10-03 7:45 AM'
    },
    { 
      name: 'John Smith', 
      id: 'STF002', 
      department: 'IT', 
      email: 'john.smith@company.com',
      signIns: 38,
      latenessCount: 5,
      deductions: 2500,
      lastSignIn: '2025-10-03 8:20 AM'
    },
    { 
      name: 'Sarah Brown', 
      id: 'STF003', 
      department: 'Finance', 
      email: 'sarah.brown@company.com',
      signIns: 45,
      latenessCount: 1,
      deductions: 500,
      lastSignIn: '2025-10-03 7:50 AM'
    },
    { 
      name: 'Michael Johnson', 
      id: 'STF004', 
      department: 'Marketing', 
      email: 'michael.johnson@company.com',
      signIns: 40,
      latenessCount: 2,
      deductions: 1000,
      lastSignIn: '2025-10-03 8:05 AM'
    },
    { 
      name: 'Emily Davis', 
      id: 'STF005', 
      department: 'Operations', 
      email: 'emily.davis@company.com',
      signIns: 44,
      latenessCount: 0,
      deductions: 0,
      lastSignIn: '2025-10-03 7:40 AM'
    },
  ];

  ngOnInit() {
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalSignIns = this.staffList.reduce((sum, staff) => sum + staff.signIns, 0);
    this.totalLateness = this.staffList.reduce((sum, staff) => sum + staff.latenessCount, 0);
    this.totalDeductions = this.staffList.reduce((sum, staff) => sum + staff.deductions, 0);
  }

  openModal(staff: any) {
    this.selectedStaff = staff;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedStaff = null;
  }
}