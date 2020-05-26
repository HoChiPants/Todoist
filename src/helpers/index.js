import {collatedTasks} from '../constants';

export const collatedTasksExists = selectedProjects =>
collatedTasks.find(task =>task.key ===selectedProjects);
