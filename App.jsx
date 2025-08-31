import React, { useState } from 'react';
import PostType from './components/MainPage.jsx';
import Question from './components/QuestionPost.jsx';
import Article from './components/ArticlePost.jsx';

function App() {
  const [postType, setPostType] = useState('');

  return (
    <div style={{ margin: 20, fontFamily: 'Times New Roman, Times, serif' }}>
      <PostType postType={postType} setPostType={setPostType} />

      {postType === 'question' && <Question />}
      {postType === 'article' && <Article />}
    </div>
  );
}

export default App;