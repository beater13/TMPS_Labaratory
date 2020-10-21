import { Todo, WhatTodo, IDo } from "./schedule";
import { MyCategory } from "./category";

/**
 *  Builder
 */
export class ScheduleBuilder {
  category: MyCategory = {
    university: "",
    work: "",
    life: "",
  };

  constructor(category?: MyCategory) {
    this.schedule = new Todo(this.counter++);
  }

  private counter = 0;
  private schedule: Todo;

  private reset(): void {
    this.schedule = new Todo(this.counter++);
  }

  private getNextAction(): Todo {
    const res = this.schedule;
    this.reset();
    return res;
  }

  createEatItem(): IDo {
    const res = this.getNextAction();
    res.type = WhatTodo.eat;
    res.category = this.category.life;
    console.log(`Add to eat`);
    return res;
  }

  createGameItem(): IDo {
    const res = this.getNextAction();
    res.type = WhatTodo.play;
    res.category = this.category.life;
    console.log(`Add to play`);
    return res;
  }

  createWatchItem(): IDo {
    const res = this.getNextAction();
    res.type = WhatTodo.watch;
    res.category = this.category.university;
    console.log(`Add to watch`);
    return res;
  }

  createWorkItem(): IDo {
    const res = this.getNextAction();
    res.type = WhatTodo.work;
    res.category = this.category.work;
    console.log(`Add to work`);
    return res;
  }
}
