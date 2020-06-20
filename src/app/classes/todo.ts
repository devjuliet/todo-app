export class Todo {
  id: number;
  task = '';
  complete = false;

  constructor(values: object) {
    Object.assign(this, values);
  }
}
