import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);

    this.onSetNameClicked = this.onSetNameClicked.bind(this);
    this.onSetAge = this.onSetAge.bind(this);
    this.onSaveUser = this.onSaveUser.bind(this);
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAge,
      'click:.set-name': this.onSetNameClicked,
      'click:.save-user': this.onSaveUser
    };
  }

  onSaveUser(evt) {
    evt.preventDefault();
    this.model.save();
  }

  template(): string {
    return `
        
            <input id='name' value='' />
            <button class='set-name'> changeName </button>
            <button class='set-age'> setRandomAge </button>
            <button class='save-user'> saveUser </button>
        
    `;
  }

  onSetNameClicked(evt) {
    evt.preventDefault();
    const inputElement = this.parent.querySelector('#name');
    if (inputElement) {
      const name = inputElement.value;
      if (name.length !== 0) {
        this.model.set({ name });
      }
    }
  }

  onSetAge(evt) {
    evt.preventDefault();
    const randAge = this.model.makeRandomAge();
    this.model.set({ age: randAge });
  }
}
