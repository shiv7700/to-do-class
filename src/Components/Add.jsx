import React from "react";
import Form from "./Form";
import Error from "./Error";
import Result from "./Result";

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      task: [],
      searchValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.remove = this.remove.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.edit = this.edit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim() === "") {
      this.setState({ text: "" });
      alert("text is empty , please enter text 🥺🥺🥺");
      this.setState({ searchValid: true });
      return;
    }
    this.setState({ searchValid: false });
    if (
      this.state.task.filter(
        (findTask) => findTask.taskName === this.state.text
      ).length > 0
    ) {
      alert(
        `The task ${this.state.text} already exists in the task list. Please choose a different name.`
      );
      this.setState({ text: "" });
      return;
    }
    this.setState({ text: "" });
    const newTask = {
      id: this.randomNumber(),
      taskName: this.state.text,
      status: false,
    };
    this.setState({ task: [...this.state.task, newTask] });
  }

  remove(elementID) {
    const particularTask = this.state.task.filter((le) => le.id === elementID);
    if (particularTask[0].status === false) {
      let ans = confirm("You are removing an incomplete task");
      if (ans === true) {
        const newResult = this.state.task.filter((e) => e.id !== elementID);
        this.setState({ task: newResult });
      }
    }
    if (particularTask[0].status === true) {
      const newResult = this.state.task.filter((e) => e.id !== elementID);
      this.setState({ task: newResult });
    }
  }

  handleCheckboxChange(elementID) {
    const updatedTasks = this.state.task.map((task) =>
      task.id === elementID ? { ...task, status: !task.status } : task
    );
    this.setState({ task: updatedTasks });
  }

  edit(elementID) {
    console.log("edited");
  }

  randomNumber = () => {
    // const random = Math.floor(Math.random() * 10000000000);
    const randomNumber = Date.now();
    return randomNumber;
  };

  render() {
    return (
      <div className="mt-4 ms-3">
        <Form
          text={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchValid={this.state.searchValid}
        />
        <Error searchValid={this.state.searchValid} />
        <Result
          task={this.state.task}
          handleCheckboxChange={this.handleCheckboxChange}
          remove={this.remove}
          edit={this.edit}
        />
      </div>
    );
  }
}
