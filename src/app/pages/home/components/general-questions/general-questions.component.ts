import { Component } from '@angular/core';

@Component({
  selector: 'app-general-questions',
  templateUrl: './general-questions.component.html',
  styleUrls: ['./general-questions.component.scss']
})
export class GeneralQuestionsComponent {

  generalQuestions = [
    {
      title: 'This is the expansion title',
      description: 'This is the primary content of the panel.'
    },
    {
      title: 'This is the expansion title',
      description: 'This is the primary content of the panel.'
    },
    {
      title: 'This is the expansion title',
      description: 'This is the primary content of the panel.'
    },
    {
      title: 'This is the expansion title',
      description: 'This is the primary content of the panel.'
    }
  ]
}
