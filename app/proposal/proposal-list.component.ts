import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'https://portfolio.jareddunn.com', 'Ruby on Rails', 150, 120, 15, 'jared@dunn.com')
  proposalTwo: Proposal = new Proposal(99, 'Stuff Company', 'https://portfolio.jareddunn.com', 'Ruby on Rails', 150, 120, 15, 'jared@dunn.com')
  proposalThree: Proposal = new Proposal(300, 'Sure Company', 'https://portfolio.jareddunn.com', 'Ruby on Rails', 150, 120, 15, 'jared@dunn.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}