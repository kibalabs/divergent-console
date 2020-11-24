
export class Link {
  readonly linkId: string;
  readonly domainId: string;
  readonly sourcePath: string;
  readonly destination: string;
  readonly isPermanent: boolean;

  public constructor(linkId: string, domainId: string, sourcePath: string, destination: string, isPermanent: boolean) {
    this.linkId = linkId;
    this.domainId = domainId;
    this.sourcePath = sourcePath;
    this.destination = destination;
    this.isPermanent = isPermanent;
  }
}
