// Result.jsx

import React from "react";

class Result extends React.Component {
  render() {
    const { task, handleCheckboxChange, remove, edit } = this.props;

    return (
      <div className="container">
        {task.map((element) => (
          <div
            key={element.id}
            className="custom-border row px-3 py-2 m-3 rounded-4"
            style={{ backgroundColor: element.status ? "#ff000047" : "" }}
          >
            <div className="col-3">
              <div>
                <div className="checkbox-wrapper-46">
                  <input
                    className="inp-cbx"
                    id={element.id}
                    type="checkbox"
                    checked={element.status}
                    onChange={() => handleCheckboxChange(element.id)}
                  />
                  <label className="cbx" htmlFor={element.id}>
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Mark As Completed</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div>
                Task Name :{" "}
                {element.status ? (
                  <span
                    className="fw-bold"
                    style={{
                      color: "red",
                      textDecorationLine: "line-through",
                    }}
                  >
                    {element.taskName}
                  </span>
                ) : (
                  <span className="fw-bold">{element.taskName}</span>
                )}
              </div>
            </div>
            <div className="col">
              <div>
                Status :{" "}
                {element.status ? (
                  <span className="badge bg-success p-2">Completed</span>
                ) : (
                  <span className="badge bg-primary p-2">Incomplete</span>
                )}
              </div>
            </div>
            <div className="col">
              <div>
                Remove :{" "}
                <span
                  onClick={() => remove(element.id)}
                  className="badge bg-danger remove p-2"
                >
                  Remove Task
                </span>
              </div>
            </div>
            <div className="col">
              <div>
                Edit :{" "}
                <span
                  className="badge bg-secondary remove p-2"
                  onClick={() => edit(element.id)}
                >
                  Edit Task
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Result;
