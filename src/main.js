import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createLoadMoreButtonTemplate} from './components/more-button.js';
// import Search from './components/search.js';
import {createSiteMenuTemplate} from './components/site-menu';
import {createFiltersTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board-container.js';
// import TaskList from './components/board-tasks.js';
// import BoardSort from './components/board-sort.js';
import {TAKS_COUNT} from "./consts";
import {render} from "./utils";

const init = () => {
  const siteMainElement = document.querySelector(`.main`);
  const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

  render(siteHeaderElement, createSiteMenuTemplate());
  render(siteMainElement, createFiltersTemplate());
  render(siteMainElement, createBoardTemplate());

  const taskListElement = siteMainElement.querySelector(`.board__tasks`);
  const boardElement = siteMainElement.querySelector(`.board`);

  render(taskListElement, createTaskEditTemplate());

  new Array(TAKS_COUNT).fill(``).forEach(() =>{
    render(taskListElement, createTaskTemplate());
  });

  render(boardElement, createLoadMoreButtonTemplate());
};

init();
