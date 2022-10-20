import { Component, ReactNode } from "react";

export class StateChager {
  static _state = {};

  set state(state: any) {
    StateChager._state = state;
  }

  get state() {
    return StateChager._state;
  }
}

const NodeOne = (props:any) => {
  return <div id={Date.now().toString()}>{props.children}</div>;
};

const NodeTwo = (props:any) => {
  return <div id={Date.now().toString()}>{props.children}</div>;
};

export class GlobalStateController extends Component<any, any> {
  stater = new StateChager();

  state = {
    actual_state: this.stater.state,
    changer: false,
  };

  componentDidMount() {
    setInterval(() => {
      if (
        JSON.stringify(this.state.actual_state) !==
        JSON.stringify(this.stater.state)
      ) {
        console.log("change on global!");
        // console.log(JSON.stringify(this.state.actual_state));
        // console.log(JSON.stringify(this.stater.state));
        
        this.setState({
          actual_state: this.stater.state,
          changer: !this.state.changer,
        });
      }
    }, 500);
  }

  render(): ReactNode {
    return <>{this.state.changer ? <NodeOne>{this.props.children}</NodeOne> : <NodeTwo>{this.props.children}</NodeTwo>}</>;
  }
}
