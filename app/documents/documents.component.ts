import { Component } from '@angular/core';
import { Document} from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.scss']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdfa asdfasd",
      file_url: 'http://google.com',
      updated_at: '3/21/18',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: "My Second Doc",
      description: "asdfa asdfasd",
      file_url: 'http://google.com',
      updated_at: '3/21/18',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Freelancer_Illustration.png'
    },
    {
      title: "My Last Doc",
      description: "asdfa asdfasd",
      file_url: 'http://google.com',
      updated_at: '3/21/18',
      image_url: 'https://www.neoncrm.com/wp-content/uploads/2017/09/accounting-graphic.png'
    }
  ]
}