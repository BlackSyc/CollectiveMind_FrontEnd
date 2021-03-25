import {IStatement} from "../../collective-mind-api-clients";

export class StatementNode implements IStatement{

  positiveArguments: StatementNode[] = [];

  negativeArguments: StatementNode[] = [];

  lastNavigation?: StatementNode;

  body: string | null;
  id: string;
  title: string | null;

  constructor(statement: IStatement) {
    this.body = statement.body;
    this.id = statement.id;
    this.title = statement.title;
  }

}
