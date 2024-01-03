import Task from "./task";

export default class TaskList {
    private tasks: Task[] = [];
  
    addTask(description: string): void {
      this.tasks.push(new Task(description));
    }
  
    markTaskAsCompleted(index: number): void {
      if (this.isValidIndex(index)) {
        this.tasks[index].completed = true;
      }
    }
  
    removeTask(index: number): void {
      if (this.isValidIndex(index)) {
        this.tasks.splice(index, 1);
      }
    }
  
    getTaskList(): Task[] {
      return this.tasks;
    }
  
    private isValidIndex(index: number): boolean {
      return index >= 0 && index < this.tasks.length;
    }
  }
  