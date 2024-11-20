import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userForm!: FormGroup;
  courses = [
    'Java',
    'Computer Science',
    'Python',
    'Data Analysis',
    'Biology'
  ];
  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i)]],
      gender: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      dateOfBirth: ['', Validators.required],
      course: ['', Validators.required]
    });

  }


  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}

