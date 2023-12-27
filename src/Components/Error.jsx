import React from "react";

class Error extends React.Component {
  render() {
    const { searchValid } = this.props;

    return (
      <>
        {searchValid && (
          <div className="text-danger fw-bold p-0 m-0">
            text is empty please enter text 🥺🥺🥺
          </div>
        )}
      </>
    );
  }
}

export default Error;
