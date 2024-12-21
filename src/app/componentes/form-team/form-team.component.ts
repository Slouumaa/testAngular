import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
})
export class FormTeamComponent {
  teamForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      projectName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      level: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]],
      projectDescription: ['', Validators.minLength(5)],
    });
  }
 

  addTeam() {
    const team = this.teamForm.value;
    this.http.post('http://localhost:3000/teams', team).subscribe(() => {
      alert('Team added successfully!');
    });
  } 
}
