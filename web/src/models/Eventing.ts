import { Callback } from './types';

export class Eventing {
  private events: { [key: string]: Callback[] } = {};

  constructor() {
    this.on = this.on.bind(this);
    this.trigger = this.trigger.bind(this);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callBack => {
      callBack();
    });
  }
}
