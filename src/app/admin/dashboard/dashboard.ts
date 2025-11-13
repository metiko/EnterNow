import { Component } from '@angular/core';

// Interface for sign-in records
interface SignInRecord {
  employeeId: string;
  department: string;
  email: string;
  signInTime: string;
  notes: string;
  timestamp: Date;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  staffList = ['All Staff', 'John Doe', 'Jane Smith', 'Michael Adams'];
  selectedStaff = 'All Staff';

  signIns = 123;
  lateness = 8.5;
  earlyBirds = 34;
  suspensions = 3;

  topEarlyStaff = [
    { name: 'Jane Smith', time: '6:45 AM' },
    { name: 'John Doe', time: '6:50 AM' },
    { name: 'Emma Brown', time: '6:52 AM' },
  ];

  latenessCount = [
    { name: 'Michael Adams', days: 5 },
    { name: 'Sophia White', days: 3 },
    { name: 'Chris Green', days: 2 },
  ];

  // Modal state
  showSignInModal = false;
  showSuccessMessage = false;

  // Sign-in form data
  signInForm = {
    employeeId: '',
    department: '',
    email: '',
    signInTime: '',
    notes: ''
  };

  // Array to store sign-in records
  signInRecords: SignInRecord[] = [];

  openSignInModal() {
    this.showSignInModal = true;
    this.showSuccessMessage = false;
    // Reset form
    this.signInForm = {
      employeeId: '',
      department: '',
      email: '',
      signInTime: '',
      notes: ''
    };
  }

  closeSignInModal() {
    this.showSignInModal = false;
    this.showSuccessMessage = false;
  }

  submitSignIn() {
    // Validate required fields
    if (!this.signInForm.employeeId || !this.signInForm.department || !this.signInForm.email) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.signInForm.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // If no time provided, use current time
    let signInTime = this.signInForm.signInTime;
    if (!signInTime) {
      const now = new Date();
      signInTime = now.toTimeString().slice(0, 5);
    }

    // Create new record object
    const newRecord: SignInRecord = {
      employeeId: this.signInForm.employeeId,
      department: this.signInForm.department,
      email: this.signInForm.email,
      signInTime: signInTime,
      notes: this.signInForm.notes,
      timestamp: new Date()
    };

    // Add to the beginning of the array (most recent first)
    this.signInRecords.unshift(newRecord);

    // Here you would typically send this data to your backend API
    console.log('Sign-in created:', newRecord);
    console.log('All records:', this.signInRecords);

    // Show success message
    this.showSuccessMessage = true;

    // Increment sign-ins count
    this.signIns++;

    // Close modal after 2 seconds
    setTimeout(() => {
      this.closeSignInModal();
    }, 2000);
  }

  // Method to delete a record
  deleteRecord(index: number) {
    const confirmed = confirm('Are you sure you want to delete this sign-in record?');
    if (confirmed) {
      this.signInRecords.splice(index, 1);
      this.signIns--;
      console.log('Record deleted. Remaining records:', this.signInRecords);
    }
  }
}