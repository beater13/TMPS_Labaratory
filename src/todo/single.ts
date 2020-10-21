import { ScheduleBuilder } from "./scheduleBuild";
import { MyCategory } from "./category";
import { Organizer } from "./organizer";

/**
 * Singleton
 */
export class ScheduleList {
  private static piece: ScheduleList;
  private constructor() {
    this.ScheduleBuilder = new ScheduleBuilder();
    this.Organizer = new Organizer();
  }
  static getPiece() {
    if (!ScheduleList.piece) {
      ScheduleList.piece = new ScheduleList();
    }
    return ScheduleList.piece;
  }

  private Organizer: Organizer;
  private ScheduleBuilder: ScheduleBuilder;

  setScheduleCategory(category: MyCategory): void {
    this.ScheduleBuilder.category = category;
  }

  addToEat(food: string, description: string): void {
    console.log("It's time to eat");
    const schedule = this.ScheduleBuilder.createEatItem();
    schedule.payload = food;
    schedule.description = description;
    this.Organizer.addViaEmailTask(schedule);
  }

  addToPlay(game: string, description: string): void {
    console.log("Gotta Play");
    const schedule = this.ScheduleBuilder.createGameItem();
    schedule.payload = game;
    schedule.description = description;
    this.Organizer.addViaSmsTask(schedule);
  }

  addToWatch(video: string, description: string): void {
    console.log("Time to watch hindu lesson");
    const schedule = this.ScheduleBuilder.createWatchItem();
    schedule.payload = video;
    schedule.description = description;
    this.Organizer.addViaEmailTask(schedule);
  }

  addToWork(objective: string, description: string): void {
    console.log("Time to work :(");
    const schedule = this.ScheduleBuilder.createWorkItem();
    schedule.payload = objective;
    schedule.description = description;
    this.Organizer.addViaEmailTask(schedule);
  }
}
