import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import html from 'remark-html';
import { getArticalById } from '../../Api/Api'
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkGemoji from 'remark-gemoji'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CodeCopyBtn from '../../../CommonComponent/codeCopyBtn';
import { Empty } from 'antd';

export default class ShowArtical extends Component {
    state = {
        htmlString: null
    }
    componentDidMount = async () => {
        if (this.props.match.params) {
            this.setState({
                htmlString: await getArticalById(this.props.match.params.Id)
            })
        }
    }

    handleAnchorClick=(event) =>{
        event.preventDefault();
        event.stopPropagation() 
        const id = event.target.hash.substring(1);
        document.getElementById(id).scrollIntoView(); 
      }


    render() {
        const Pre = ({ children }) => <pre className="blog-pre">
            <CodeCopyBtn>{children}</CodeCopyBtn>
            {children}
        </pre>
        return (
            <div className='ShowArtical'>
                {
                    this.state.htmlString ?
                        <ReactMarkdown
                            className='ArticalMarkDown'
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[remarkGfm,remarkGemoji]}
                            onLinkClick={this.handleAnchorClick} 
                            renderers={{
                                heading: ({ node, ...props }) => {
                                  const Tag = `h${node.depth}`;
                                  return <Tag id={node.children[0].value} {...props} />; 
                                }
                              }}
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
                            {this.state.htmlString.Content}
                        </ReactMarkdown> : <Empty></Empty>
                }
            </div>
        )
    }
} 
