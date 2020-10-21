export enum WhatTodo {
  play = "play a video game",
  watch = "watch hindu lesson",
  eat = "eat",
  work = "complete today's objective",
  other = "other stuff",
}

export interface IDo {
  id: number;
  type: WhatTodo;
  payload: string;
  description: string;
  category: string;
}

export class Todo implements IDo {
  id: number = 0;
  type: WhatTodo = WhatTodo.other;
  payload: string = "";
  description: string = "";
  category: string = "";

  constructor(id: number) {
    this.id = id;
  }
}
