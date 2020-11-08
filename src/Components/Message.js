import React, { useState } from "react";

export default function Message() {
  const [comment, setComment] = useState("");

  const [listComments, setListComments] = useState([]);

  const [karma, setKarma] = useState(0);

  const [karmaFlag, setKarmaFlag] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setListComments([...listComments, comment]);
    setComment("");
  };

  const upKarma = () => {
    const raiseKarma = () => {
      if (karmaFlag === false) {
        setKarma(karma + 1);
        setKarmaFlag(true);
      } else {
        setKarma(karma - 1);
        setKarmaFlag(false);
      }
    };
    raiseKarma();
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
          ? listComments.map((comment, key) => (
              <div className="comment">
                <div className="username">Gustavo</div>
                <div key={key}>"{comment}"</div>
                <div>Karma: {karma}</div>
                <button onClick={upKarma}>Like</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
