import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function Markdown() {
    const [markdownText, setMarkdownText] = useState(``);

    const inputChangeHandler = (event) => {
        setMarkdownText(`${event.target.value}`);
    };

    return (
        <div className="markdown-container">
            <div className="w-100 row row-columns-2">
                <h1 className='mt-3'>Markdown Previewer</h1>
                <p>Enter markdown and watch translated text appear!</p>
                <div className="col m-2">
                    <textarea className='markdown-textarea' 
                        value={markdownText}
                        onChange={inputChangeHandler}
                        placeholder='Enter Markdown text here...'
                    />
                </div>
                <div className='markdown-preview col m-2'>
                    <ReactMarkdown>{markdownText}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default Markdown;