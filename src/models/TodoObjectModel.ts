// * types
import { UIdType } from '../types/general';

class TodoObjectModel {
  // * private data
  private _id: UIdType;

  // * public data
  public title: string;
  public deadline: Date;
  public status: boolean;

  constructor(id: UIdType, title: string, deadline: Date) {
    this._id = id;

    this.title = title;
    this.deadline = deadline;
    this.status = false;
  }

  // * methods
  toggleStatus(): void {
    this.status = !this.status;
  }

  // * accessors
  get uniqueKey() {
    return this._id;
  }
}

export default TodoObjectModel;
