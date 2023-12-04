import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CodeCopyBtn from "./codeCopyBtn";
import "github-markdown-css/github-markdown.css";
import { Empty } from "antd";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import "./markDown.scss";

import "vditor/dist/index.css";
import React from "react";

export default function markDown({ html }) {


  const navigateToSection = (event, itemId) => {
    console.log(itemId);
    if (itemId && itemId.startsWith("#")) {
      // 移除 '#'，然后进行 URL 解码
      var decodedStr = decodeURIComponent(itemId.slice(1));
      event.preventDefault(); // 阻止默认锚点跳转行为
      const sectionElement = document.getElementById(decodedStr);
      if (sectionElement) {
        // 如果找到对应的节，则平滑滚动到该位置
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: "smooth"
        });
      }
    } else if (itemId) {
      // 如果 itemId 不是以 '#' 开头，打开新页面并跳转
      event.preventDefault(); // 阻止默认锚点跳转行为
      window.open(itemId, '_blank');
    }
  };
    

  const Pre = ({ children }) => (
    <pre className="blog-pre">
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  );


  return (
    <div>
      {html ? (
        <ReactMarkdown
          className="ArticalMarkDown"
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm, remarkGemoji, remarkToc, remarkSlug]}
          components={{
            a: ({node, ...props}) => (
              <a
                {...props}
                // 确保这个onClick处理器调用你自己的函数并传递适当的参数
                onClick={(e) => navigateToSection(e, props.href)}
              >
                {props.children}
              </a>
            ),
            pre: Pre,
            code({
              node,
              inline,
              className = "blog-code",
              children,
              ...props
            }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={a11yDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props} style={{overflowX:'scroll'}}>
                  {children}
                </code>
              );
            },
          }}
        >
          {html}
        </ReactMarkdown>
      ) : (
        <Empty></Empty>
      )}
    </div>
  );
}
