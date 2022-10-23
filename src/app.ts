import { Telegraf } from 'telegraf';
import { config } from '../configs/index.js';
import { QueueController } from './controllers/queue.controller.js';
import { QueueService } from './services/queue.service.js';

const bot = new Telegraf(config.TG_TOKEN);
const service = new QueueService();
const controller = new QueueController(service);

bot.start(controller.start.bind(controller));
bot.command('addme', controller.addme.bind(controller));
bot.command('end', controller.end.bind(controller));
bot.launch().then(() => console.log('Bot started'));
