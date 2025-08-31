import React from 'react';

function ArticlePost() {
  return (
    <div>
      <h1 style={{ backgroundColor: 'lightblue' }}>What do you want to ask or share</h1>

      <div>
        <p>Title</p>
        <input
          type="text"
          placeholder="Enter a descriptive title"
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <p>Abstract</p>
        <textarea
          placeholder="Enter a 1-paragraph abstract"
          style={{ width: '100%', height: 40 }}
        />
      </div>

      <div>
        <p>Article Text</p>
        <textarea
          placeholder="Enter the article text"
          style={{ width: '100%', height: 80 }}
        />
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

export default ArticlePost;