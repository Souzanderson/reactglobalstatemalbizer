import { Component, ReactNode } from "react";

export class StateChager<T = any> {
  static _state: any = {};
  public key!: string;
  static changed: boolean = false;

  constructor(key: string) {
    this.key = key;
  }

  static init<L = any>(key: string) {
    return new StateChager<L>(key);
  }

  static get stateValue() {
    return this._state;
  }

  get state() {
    return StateChager._state[this.key] as T;
  }

  public setState(value: T) {
    StateChager.changed = true;
    StateChager._state[this.key] = value;
  }
}

const NodeOne = (props: any) => {
  return <div id={Date.now().toString()}>{props.children}</div>;
};

const NodeTwo = (props: any) => {
  return <div id={Date.now().toString()}>{props.children}</div>;
};

export class GlobalStateController extends Component<any, any> {
  state = {
    actual_state: StateChager.stateValue,
    changer: false,
  };

  componentDidMount() {
    setInterval(() => {
      if (StateChager.changed) {
        this.setState(
          {
            actual_state: StateChager.stateValue,
            changer: !this.state.changer,
          },
          () => {
            StateChager.changed = false;
          }
        );
      }
    }, 100);
  }

  render(): ReactNode {
    return (
      <>
        {this.state.changer ? (
          <NodeOne>{this.props.children}</NodeOne>
        ) : (
          <NodeTwo>{this.props.children}</NodeTwo>
        )}
      </>
    );
  }
}
