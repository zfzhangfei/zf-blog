import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import html from 'remark-html';
import { getArtical } from '../../Api/Api'
// import rehypePrism from 'rehype-prism-plus'
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/components/prism-jsx';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CodeCopyBtn from '../../../CommonComponent/codeCopyBtn';

export default class ShowArtical extends Component {
    state = {
        htmlString: null
    }
    componentDidMount = async () => {
        this.setState({
            htmlString: await getArtical(5)
        })
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
                    linkTarget='_blank'
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
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
                    { this.state.htmlString.Content}
                </ReactMarkdown>: ''
                }
            </div>
        )
    }
} 
