import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participants: any[] = [];
  projectDescription: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const teamId = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:3000/teams/${teamId}`).subscribe((team: any) => {
      this.participants = team.participants;
      this.projectDescription = team.projectDescription;
    });
  }
}
