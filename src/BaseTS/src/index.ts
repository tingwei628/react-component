export namespace Base_TS {
  export class S {
    p: string;
    constructor(public t: string) {
      this.p = t;
    }
    print(): string {
      return this.p;
    }
  }
  console.log("Hello", new S("KOKO").print());
}