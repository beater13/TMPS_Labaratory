import { TodoListProxy } from "../main";

export class User {
  run() {
    const mySystem = TodoListProxy.getInstance();

    const unregisteredUser = "invalidTocken";
    const registeredUser = "validTocken";

    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.setTodoSource({
        university: "Technical University of Moldova",
        work: "Current job location",
        life: "Personal info",
      })
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToEat("vegetables", "I need to eat vegetables besides fast food")
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToGetGrocery("bread", "I need to buy bread to do sandwiches")
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToWork(
        "feature",
        "I need to implement this feature until the deadline"
      )
    );
    mySystem.authoriseAndRun(registeredUser, () =>
      mySystem.addToRead(
        "Design Patterns: Elements of Reusable Object-Oriented Software",
        "I gotta read an article in order to end the lab"
      )
    );
  }
}
