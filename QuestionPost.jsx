import React from 'react';

function QuestionPost() {
  return (
    <div>
      <h1 style={{ backgroundColor: 'lightblue' }}>What do you want to ask or share</h1>

      <div>
        <p>Title</p>
        <input
          type="text"
          placeholder="Start your question with how, what, why, etc."
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <p>Describe your problem</p>
        <textarea style={{ width: '100%', height: 180 }} />
      </div>

      <div>
        <p>Tags</p>
        <input
          type="text"
          placeholder="Add up to 3 tags e.g., Java"
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ textAlign: 'right' }}>
        <button><b>Post</b></button>
      </div>
    </div>
  );
}

export default QuestionPost;