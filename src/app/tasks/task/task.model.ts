export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskData
  extends Pick<Task, 'title' | 'summary' | 'dueDate'> {}
