import React, { useState } from "react";

export default function Message() {
  const [comment, setComment] = useState("");

  const [listComments, setListComments] = useState(["hi"]);

  const onSubmit = (e) => {
    e.preventDefault();
    setListComments([...listComments, comment]);
    setComment("");
  };

  return (
    <div>
      <form className="input" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
      <div className="display">
        {listComments
          ? listComments.map((comment, key) => 
          <div className="comment">
          <div className="username">Gustavo</div>
          <div key={key}>"{comment}"</div>
          </div>)
          : null}
      </div>
    </div>
  );
}
