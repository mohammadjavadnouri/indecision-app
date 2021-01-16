import React from "react";

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}.{props.optionText}
    </p>

    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

/*class Option extends React.Component {
    render() {
      return <div>{this.props.optiontext}</div>;
    }
  }*/

export default Option;
