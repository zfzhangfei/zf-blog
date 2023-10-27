import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkGemoji from 'remark-gemoji'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CodeCopyBtn from '../../Code/CommonComponent/codeCopyBtn';
import 'github-markdown-css/github-markdown.css';
import { Empty } from 'antd';
import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug';
import './VditorEditor.scss'


import "vditor/dist/index.css";
import React, { useState } from "react";
import Vditor from "vditor";

const VditorEditor = ({ currentArtical, saveArticle }) => {
  const [html,setHtml]=useState()

  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      mode: "wysiwyg",
      after: () => {
        // vditor.setValue(currentArtical.Content);
      },
      input(value) {
        // 输入变化时保存当前值 
        // saveArticle(value);
        setHtml(value)
      },
    });
  }, []);



  const Pre = ({ children }) => <pre className="blog-pre">
  <CodeCopyBtn>{children}</CodeCopyBtn>
  {children}
</pre>
  return (
    <div id='MyVditor'>
      <div id="vditor" className="vditor"/>
      <div id='ShowVditor'>
        {html ? <ReactMarkdown
          className='ArticalMarkDown'
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm, remarkGemoji, remarkToc, remarkSlug]}
          components={{
            pre: Pre,
            code({ node, inline, className = "blog-code", children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={a11yDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {html}
        </ReactMarkdown> : <Empty></Empty>}
      </div>
    </div>
  );
};

export default VditorEditor;





