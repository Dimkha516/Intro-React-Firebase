import React from "react";

const CreatePost = () => {
  return (
    <div className="post">
      <div className="post-form">
        <textarea placeholder="Message..." />
        <input type="submit" value="Envoyer" />
      </div>
    </div>
  );
};

export default CreatePost;
