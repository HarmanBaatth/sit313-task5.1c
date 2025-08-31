import React from 'react';

function MainPage({ postType, setPostType }) {
  return (
    <div>
      <h1 style={{ backgroundColor: 'lightpink' }}>New Post</h1>
      <div>
        <p>Select Post Type:</p>
        <input
          type="radio"
          value="question"
          checked={postType === 'question'}
          onChange={() => setPostType('question')}
        />
        <label> Question </label>

        <input
          type="radio"
          value="article"
          checked={postType === 'article'}
          onChange={() => setPostType('article')}
          style={{ marginLeft: 10 }}
        />
        <label> Article </label>
      </div>
    </div>
  );
}

export default MainPage;