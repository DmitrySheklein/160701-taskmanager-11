import {PosRender} from './consts';

export const render = (container, template, place = PosRender.BEFORE_END) => {
  container.insertAdjacentHTML(place, template);
};
