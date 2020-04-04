import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
    this.onMouseEnteredToHeader = this.onMouseEnteredToHeader.bind(this);
  }

  template(): string {
    return `
        <h1> model Form </h1>
        <h2> name:${this.model.get('name')} </h2>
        <h2> age:${this.model.get('age')} </h2> `;
  }
  // onMouse Enter To Header
  onMouseEnteredToHeader() {
    alert('you entered the Heade !!');
  }
  //events map
  eventsMap(): { [key: string]: () => void } {
    return {
      'mouseenter:.header': this.onMouseEnteredToHeader
    };
  }
}
