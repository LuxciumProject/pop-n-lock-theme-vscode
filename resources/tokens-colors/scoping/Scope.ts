export class Scope implements Scopes {
  public source: string;
  private elementName: string[];
  constructor(elementName: string[] | string) {
    if (typeof elementName === 'string') {
      this.elementName = [elementName];
    } else {
      this.elementName = elementName;
    }
  }
  public toString() {
    if (this.elementName.length === 1) {
      return `${this.source} ${this.elementName[0]}`;
    }
    return `${this.source} ${this.elementName.join('.')}`;
  }
}

export interface Scopes {
  source: string;
}
