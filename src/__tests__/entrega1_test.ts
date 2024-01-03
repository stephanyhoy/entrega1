import Task from "../entrega_1/task";
import TaskList from "../entrega_1/task_list";

test('should  create an empty list', () => {
  const taskList = new TaskList();
  expect(taskList.getTaskList()).toEqual([]);
});

test('should add a task to the list', () => {
  const taskList = new TaskList();
  taskList.addTask('Buy groceries');
  expect(taskList.getTaskList()).toEqual([new Task('Buy groceries')]);
});

test('should mark a task as completed', () => {
  const taskList = new TaskList();
  taskList.addTask('Buy groceries');
  taskList.markTaskAsCompleted(0);
  expect(taskList.getTaskList()[0].completed).toBe(true);
});

test('should remove a task from the list', () => {
  const taskList = new TaskList();
  taskList.addTask('Buy groceries');
  taskList.removeTask(0);
  expect(taskList.getTaskList()).toEqual([]);
});

test('should get the task list', () => {
  const taskList = new TaskList();
  taskList.addTask('Buy groceries');
  taskList.addTask('Clean the house');
  expect(taskList.getTaskList()).toEqual([
    new Task('Buy groceries'),
    new Task('Clean the house'),
  ]);
});
