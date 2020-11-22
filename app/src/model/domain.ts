
export class Domain {
  readonly domainId: string;
  readonly url: string;
  readonly isVerified: boolean;

  public constructor(domainId: string, url: string, isVerified: boolean) {
    this.domainId = domainId;
    this.url = url;
    this.isVerified = isVerified;
  }
}
