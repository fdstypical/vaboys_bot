export class User {
  private seed: number;

  constructor(
    public readonly id: number,
    public readonly firstname: string,
    public readonly lastname?: string,
    public readonly username?: string,
  ) {
    this.seed = Math.random();
  }

  public get fullname(): string {
    if (this.lastname) return `${this.firstname} ${this.lastname}`;
    else return `${this.firstname}`;
  }

  public get mention(): string {
    if (this.username) return `@${this.username}`;
    else return `[${this.fullname}]`
  }

  public getSeed(): number {
    return this.seed;
  }

  public setSeed(seed: number) {
    this.seed = seed;
  }
}
