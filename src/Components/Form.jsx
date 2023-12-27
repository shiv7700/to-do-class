import React from "react";

class Form extends React.Component {
  render() {
    const { text, handleChange, handleSubmit, searchValid } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <label className="me-3">Add Another Task - </label>
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="enter new task ..."
          className="p-1 input-value rounded-3"
          style={{
            border: searchValid ? "2px solid red" : "2px solid black",
          }}
        />
        <input
          type="submit"
          value="add task"
          className="py-1 px-2 ms-4 submit-btn rounded-3"
        />
      </form>
    );
  }
}

export default Form;
