import { Model } from '../models/Model';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export abstract class View<T extends Model<K>, K> {
  parent: Element;
  model: T;
  regions: { [key: string]: Element } = {};

  constructor(parent, model) {
    // the Parent Elemnt Of the View Component !
    this.parent = parent;

    //the Model Of a data that we want To See !!
    this.model = model;

    // Binding This On the Methods Of class
    this.render = this.render.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
    this.mapRegions = this.mapRegions.bind(this);
    this.bindChangeEventOnModel = this.bindChangeEventOnModel.bind(this);
    this.onRenderNestedCmps = this.onRenderNestedCmps.bind(this);

    //calling the Method to Create and Render View !
    this.bindChangeEventOnModel();
  }

  // the Template method that will implement by the Child Classes From this class that Inherited!
  abstract template(): string;

  //About Regions

  // Getting the Diffrent Regions that we want to See Elements
  //this method will be over write In Inherited Classes ! ( children Classes )
  regionsMap(): { [key: string]: string } {
    return {};
  }

  onRenderNestedCmps(): void {}

  // Map Diffrent Regions of Diffrent Components Of a Page
  mapRegions(fragment: DocumentFragment): void {
    // console.log('amri is here right now !! Sind Sie Hire', this);
    const regiosMap = this.regionsMap();
    for (let key in regiosMap) {
      const selector = regiosMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  // Return All the Events of a page
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  // render the Html Elemnets on the Window
  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');

    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRenderNestedCmps();

    this.parent.append(templateElement.content);
  }

  // binding Events To The Elemnts Of a Fragment !
  bindEvents(fragment: DocumentFragment): void {
    const evtsMap = this.eventsMap();
    for (const key in evtsMap) {
      const [evtName, elmName] = key.split(':');

      fragment.querySelectorAll(elmName).forEach(elem => {
        elem.addEventListener(evtName, evtsMap[key]);
      });
    }
  }

  // binding change event on the current model
  bindChangeEventOnModel() {
    this.model.on('change', () => this.render());
  }
  // fuck you !
}
