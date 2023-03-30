import React from 'react'
import { marked } from 'marked';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify'
import '../App.css'

function Editor() {
  marked.setOptions({ breaks: true })

  const [content, setContent] = useState<any>('');

  const handleChange = (e: any) => {
    setContent(e.target.value)
  }

  console.log(DOMPurify.sanitize(marked.parse(content.replace(/&gt;+/g, '>'))))

  return (
    <main>
      <div className="container">
        <article className='plain-text'>
          <textarea onChange={handleChange} placeholder='Separate lines with two spaces'></textarea>
        </article>

        <article className="markdown">
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(content.replace(/&gt;+/g, '>')))}} />
        </article>
      </div>
    </main>
  )
}

export default Editor