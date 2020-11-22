import { Domain } from './domain';
import { Link } from './link';

export class HomeDomain {
  readonly domain: Domain;
  readonly topLinks: Link[];
  readonly totalLinkCount: number;

  public constructor(domain: Domain, topLinks: Link[], totalLinkCount: number) {
    this.domain = domain;
    this.topLinks = topLinks;
    this.totalLinkCount = totalLinkCount;
  }
}
