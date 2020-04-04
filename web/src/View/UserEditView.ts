import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { View } from './View';
import { UserProps, User } from '../models/User';

export class UserEdit extends View<User, UserProps> {
  constructor(public parent, public model) {
    super(parent, model);
    this.onMouseMouveOnUserEdit = this.onMouseMouveOnUserEdit.bind(this);
  }

  // on render nested Cmps
  onRenderNestedCmps() {
    new UserForm(this.regions.userForm, this.model).render();
    new UserShow(this.regions.userShow, this.model).render();
  }

  //regionMap
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }

  // template of a User edit component
  template(): string {
    return `
    <div>
      <header class='user-show'></header>
      <form class='user-form'></form>
    </div>
    `;
  }

  //over ride !
  eventsMap(): { [key: string]: () => void } {
    return {
      mouseentered: this.onMouseMouveOnUserEdit
    };
  }

  onMouseMouveOnUserEdit() {
    console.log('amir is here in mouse entered To mouse Moved In the UserEdit');
  }
}
