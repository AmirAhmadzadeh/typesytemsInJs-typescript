import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';
import { Collection } from '../models/Collection';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
import { UserEdit } from './UserEditView';

export class UserList extends CollectionView<User, UserProps> {
  constructor(parent: Element, collection: Collection<User, UserProps>) {
    super(parent, collection);
  }

  renderItem(model: User, parentItem: Element): void {
    // new UserShow(parentItem, model).render();
    // new UserForm(parentItem, model).render();

    new UserEdit(parentItem, model);
  }
  regionsMap(): { [key: string]: string } {
    return {};
  }

  onRenderNestedCmps(): void {}
}
