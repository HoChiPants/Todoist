import {collatedTasksExists} from '../constants';

export const collatedTasksExists = selectedProjects =>
collatedTasksExists.find(task =>task.key ===selectedProjects);
