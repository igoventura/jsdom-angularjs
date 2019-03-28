declare namespace NodeJS{
    export interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
    export interface Document {
        destroy: any
    }
  }