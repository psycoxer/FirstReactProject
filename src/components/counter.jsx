import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div
        style={{ ...{ display: "flex" }, ...{ alignItems: "center" } }}
        className="m-2">
        <input
          type="text"
          className="form-control m-2"
          placeholder="Item"
          onChange={(event) =>
            this.props.onChange(this.props.counter, event.target.value)
          }
        />
        <span className={this.changeButtonClass()}>{this.formatted()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrease(this.props.counter)}>
          Add
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  changeButtonClass() {
    let warnin = "badge m-2 badge-";
    warnin += this.props.counter.value === 0 ? "warning" : "primary";
    return warnin;
  }

  formatted() {
    const { value } = this.props.counter;
    if (value === 0) {
      return "Zero";
    } else {
      return value;
    }
  }
}

export default Counter;
