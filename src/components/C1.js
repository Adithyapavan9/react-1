// src/components/C1.js
import React, { useState } from 'react';
import './C1.css';

function C1() {
  const [text, setText] = useState('');

  // Calculate the word count
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  return (
    <div className="word-counter">
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        className="text-area"
        data-gramm="false" 
      />
      <p className="word-count-text">Word Count: {wordCount}</p>
    </div>
  );
}

export default C1;
