import { Context } from 'telegraf';
import { QueueService } from '../services/queue.service';
import { User } from '../models/user.model';

export class QueueController {
  private service: QueueService;

  constructor(service: QueueService) {
    this.service = service;
  }

  public start(ctx: Context) {
    ctx.reply(this.service.start());
  }

  public addme(ctx: Context) {
    if (!ctx.message?.from) {
      return ctx.reply('Something went wront, sorry!');
    }

    const { id, first_name, last_name, username } = ctx.message?.from;
    const user = new User(id, first_name, last_name, username);
    this.service.addme(user);
  }

  public end(ctx: Context) {
    const ordered = this.service.end();
    const report = this.service.report(ordered);
    ctx.reply(report);
  }
}
