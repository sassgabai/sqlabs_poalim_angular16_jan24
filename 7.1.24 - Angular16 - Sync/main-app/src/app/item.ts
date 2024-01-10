export class Item {
    static nextId = 0;

    constructor(
      public id: number,
      public name: string,
      public feature: string | undefined,
      public url: string,
      public rate = 100) {
        this.id = id;
    }
}
 