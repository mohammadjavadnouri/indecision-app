class VisibilityToggle extends React.Component {
  render() {
    return (
      <div>
        <h1>Component based VisibilityToggle App</h1>
        <HideShowButton />
      </div>
    );
  }
}

class HideShowButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleOnClick() {
    this.setState((prevstate) => {
      return {
        visibility: !prevstate.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>
          {this.state.visibility ? "show" : "hide"}
        </button>
        {this.state.visibility && (
          <div>Here are your details you wanna see :)</div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
/*
const appRoot = document.getElementById("app");

let visibility = false;
const onToggle = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && <div>Here are the details you wanna see.</div>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
*/
