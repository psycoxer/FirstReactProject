import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0, text: "" }],
    existed: 1,
  };
  render() {
    return (
      <div>
        <h1 className="m-2">Shopping list</h1>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}>
          Reset all Qty.
        </button>
        {this.state.counters.map((current) => (
          <Counter
            key={current.id}
            onDelete={this.handleDelete}
            counter={current}
            onIncrease={this.handleIncrease}
            onChange={this.handleChange}
          />
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={this.handleAdd}>
          +
        </button>
        <br />
        <button
          className="btn btn-primary btn-sm btn-success m-2"
          onClick={this.handlePrint}>
          Print
        </button>
      </div>
    );
  }

  handleDelete = (counterId) => {
    const updatedCounters = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    this.setState({ counters: updatedCounters });
  };

  handleIncrease = (counter) => {
    const updatedCounters = [...this.state.counters];
    const index = updatedCounters.indexOf(counter);
    updatedCounters[index] = { ...counter };
    updatedCounters[index].value++;
    this.setState({ counters: updatedCounters });
  };

  handleReset = () => {
    const updatedCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: updatedCounters });
  };

  handleAdd = () => {
    const cexisted = this.state.existed;
    const updatedCounters = [...this.state.counters];
    updatedCounters.push({
      id: cexisted + 1,
      value: 0,
    });
    this.setState({ counters: updatedCounters, existed: cexisted + 1 });
  };

  handleChange = (changedCounter, text) => {
    const updatedCounters = [...this.state.counters];
    const index = updatedCounters.indexOf(changedCounter);
    updatedCounters[index] = { ...changedCounter };
    updatedCounters[index].text = text;
    this.setState({ counters: updatedCounters });
  };

  handlePrint = () => {
    const seperatorr = "——————————————————————————————————————————";
    let finalArray = ["Qty\t|Item\n", seperatorr + "\n"];
    console.log(this.state.counters);
    for (const currentCounter of this.state.counters) {
      if (currentCounter.text && currentCounter.value) {
        finalArray.push(
          [currentCounter.value, "\t", "|" + currentCounter.text, "\n"].join("")
        );
        finalArray.push(seperatorr + "\n");
      }
    }
    console.log(finalArray.join(""));

    var hiddenElement = document.createElement("a");

    hiddenElement.href =
      "data:attachment/text," + encodeURI(finalArray.join(""));
    hiddenElement.target = "_blank";
    hiddenElement.download = "ShoppingList.txt";
    hiddenElement.click();
    hiddenElement.remove();
  };
}

export default Counters;
