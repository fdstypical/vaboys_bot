import { MemoryStorage } from '../storage/memory.storage';
import { User } from '../models/user.model';

export class QueueService {
  private readonly storage = new MemoryStorage<string, User>();

  public start(): string {
    return `Welcome to the queue bot!\nWrite /addme command to get in queue :3\nGood luck!`;
  }

  public addme(user: User): void {
    this.storage.set(`${user.id}`, user);
  }

  public end() {
    for (let [_, user] of this.storage) {
      user.setSeed(Math.random());
    }

    const users = this.storage.values();
    const ordered = [...users].sort((a, b) => a.getSeed() - b.getSeed());

    this.storage.clear();
    return ordered;
  }

  public report(users: User[]) {
    if (users.length > 0)
      return (
        `Report!\n` +
        users.reduce(
          (acc, curr, ind) =>
            acc + `${curr.mention} you is: ${ind} (your seed is ${curr.getSeed()})\n`,
          '',
        )
      );
    else return `No one is in queue :(`;
  }
}
