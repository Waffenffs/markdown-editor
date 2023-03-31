import React from 'react'
import { marked } from 'marked';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify'
import '../App.css'

// TO DO
// create a database for each users
// use firebase's firestore for the DB
// use firebase's auth for user authentication
// maybe use node.js firebase SDK?

function Editor() {
  // allows marked to render new lines
  marked.setOptions({ breaks: true })

  // holds textarea content
  const [content, setContent] = useState<any>('');

  // handles textarea changes
  const handleChange = (e: any) => {
    setContent(e.target.value)
  }

  return (
    <main>
      <div className="container">
        <article className='plain-text'>
          <div className="header">MARKDOWN</div>
          <textarea onChange={handleChange} placeholder='Separate lines with two spaces'></textarea>
        </article>

        <article className="markdown">
          <div className="header">PREVIEW</div>
          <div className="preview-container">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(content.replace(/&gt;+/g, '>')))}} />
          </div>
        </article>
      </div>
    </main>
  )
}

export default Editor