import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { getArticalById } from '../../../../Api/Api'
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkGemoji from 'remark-gemoji'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CodeCopyBtn from '../../../../CommonComponent/codeCopyBtn';
import 'github-markdown-css/github-markdown.css';
import '../../../Css/Markdown.css'
import { Empty } from 'antd';
import remarkToc from 'remark-toc';
import { remark } from 'remark';
import Comment from '../Comment/Comment';
import remarkSlug from 'remark-slug';
import { GlobalProvider, GlobalContext } from '../../../../../Utils/GlobalProvider';


export default class ShowArtical extends Component {
    state = {
        htmlString: null,
        toc: null,
    }
    componentDidMount = async () => {
        if (this.props.match.params) {
            let Article = await getArticalById(this.props.match.params.Id)
            // 1. 获取 AST
            const ast = remark().parse(Article.Content)
            console.log(remark(), 'remark()remark()');
            // // 2. 从 AST 提取标题  
            const headings = ast.children
                .filter(node => node.type === 'heading')
                .map(heading => {
                    console.log(heading, 'heading')
                    // 从 children 中取文本 
                    const text = heading.children[0].value;
                    // 生成 ID 
                    const id = text.toLowerCase().replace(/\s/g, '-');
                    return {
                        id,
                        text
                    };
                });
            this.setState({
                htmlString: Article,
            }, () => {
                this.props.onUpdate(headings)
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
            <GlobalContext.Consumer>
                {context => (
                    <div className='ShowArtical'>
                        {
                            this.state.htmlString && this.state.htmlString.Content ?
                                <ReactMarkdown
                                    className='ArticalMarkDown'
                                    rehypePlugins={[rehypeRaw]}
                                    remarkPlugins={[remarkGfm, remarkGemoji, remarkToc, remarkSlug]}
                                    onLinkClick={this.handleAnchorClick}
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
                        {
                            <Comment></Comment>
                        }
                    </div>
                )}
            </GlobalContext.Consumer>
        )
    }
} 