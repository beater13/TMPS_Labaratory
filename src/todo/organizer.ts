import { IDo } from "./schedule";
import { NotificationFactory } from "./notification";

export class Organizer {
  private emailNotification = new NotificationFactory().createEmailNotification();
  private smsNotification = new NotificationFactory().createSMSNotification();
  private finished: IDo[] = [];
  private todo: IDo[] = [];
  private doing: IDo[] = [];

  constructor() {}

  addViaEmailTask(task: IDo): void {
    this.todo.push(task);
    this.emailNotification.send({
      recipient: task.category,
      title: `New todo item: ${task.payload}`,
      description: task.description,
    });
  }
  addViaSmsTask(task: IDo): void {
    this.todo.push(task);
    this.smsNotification.send({
      recipient: task.category,
      title: `New todo item: ${task.payload}`,
      description: task.description,
    });
  }
}
