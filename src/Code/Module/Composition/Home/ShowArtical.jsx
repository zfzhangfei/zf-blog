import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { getArticalById } from '../../Api/Api'
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkGemoji from 'remark-gemoji'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CodeCopyBtn from '../../../CommonComponent/codeCopyBtn';
import 'github-markdown-css/github-markdown.css';
import '../../Css/Markdown.css'
import { Empty } from 'antd';
import remarkToc from 'remark-toc';
import { remark } from 'remark';
import { toc } from 'mdast-util-toc';

function Toc({ toc }) {
    console.log(toc, 'cccccccccccccc');
    return (
        <div className="toc">
            {toc.map(item => (
                <a key={item.id} href={`#${item.id}`}>
                    {item.text}
                </a>
            ))}
        </div>
    )
}


export default class ShowArtical extends Component {
    state = {
        htmlString: null,
        toc: null,
    }
    componentDidMount = async () => {
        let Article = await getArticalById(this.props.match.params.Id)
        const ast = remark().parse(Article.Content)
        // const ast = parser().processSync(markdown).result;
        const headings = ast.children
            .filter(node => node.type === 'heading')
            .map((heading, index) => {
                console.log(heading, 'heading');
                const text = heading.children[0].value;
                const id = text.split(' ')[0];
                return ({
                    id,
                    text
                })
            });
        console.log(ast, headings, 'astastast');
        if (this.props.match.params) {
            this.setState({
                htmlString: await getArticalById(this.props.match.params.Id),
                toc: headings
            })
        }
    }

    handleAnchorClick = (event) => {
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
                <div style={{ width: '100%', height: 200, background: 'pink' }}>
                    {this.state.toc &&
                        <Toc toc={this.state.toc} />
                    }
                </div>
                {
                    this.state.htmlString ?
                        <ReactMarkdown
                            className='ArticalMarkDown'
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[remarkGfm, remarkGemoji, remarkToc]}
                            onRender={({ toc }) => {
                                console.log(toc, 'cccccccccccc')
                            }}
                            onLinkClick={this.handleAnchorClick}
                            components={{
                                pre: Pre,
                                heading: ({ node, ...props }) => {
                                    const Tag = `h${node.depth}`;
                                    return <Tag id={node.children[0].value} {...props} />;
                                },
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
