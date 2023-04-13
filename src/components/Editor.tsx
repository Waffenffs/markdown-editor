import React from 'react'
import { marked } from 'marked';
import { useState } from 'react';
import DOMPurify from 'dompurify'
import '../App.css'    
  
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
          <div className="header">
            <p>MARKDOWN</p>
          </div>
          <textarea onChange={handleChange}></textarea>
        </article>

        <article className="markdown">
          <div className="header">
            <p>PREVIEW</p>
          </div>
          <div className="preview-container">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(content.replace(/&gt;+/g, '>')))}} />
          </div>
        </article>
      </div>
    </main>
  )
}

export default Editor