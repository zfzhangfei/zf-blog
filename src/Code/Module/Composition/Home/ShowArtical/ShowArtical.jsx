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
import ArticalTitle from '../../../../CommonComponent/ArticalTitle';
import { visit } from 'unist-util-visit';


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
            // // 2. 从 AST 提取标题  
            const headings = ast.children
                .filter(node => node.type === 'heading')
                .map(heading => {
                    // 从 children 中取文本 
                    const text = heading.children[0].value;
                    // 生成 ID 
                    // const id = text.toLowerCase().replace(/\s/g, '-');
                    let textback = text.toLowerCase().replace(/\s/g, '-');
                    const id = textback.toLowerCase().replace(/[^\w\s\u4e00-\u9fa5]/g, '');
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


    remarkSlugCustom = () => {
        const transformer = (tree) => {
            const visitor = (node) => {
                if (node.type === 'heading') {
                    let text = node.children
                        .filter(n => n.type === 'text')
                        .map(n => n.value)
                        .join('')
                        .toLowerCase()
                        .replace(/[^a-z0-9\s]/g, '')
                        .replace(/\s/g, '-');
                    node.data = {
                        id: text,
                        ...node.data,
                    };
                }
            }
            visit(tree, 'heading', visitor);
        }
        console.log(transformer, 'transformertransformer');
        return transformer;
    }





    render() {
        const Pre = ({ children }) => <pre className="blog-pre">
            <CodeCopyBtn>{children}</CodeCopyBtn>
            {children}
        </pre>
        return (
            <GlobalContext.Consumer>
                {context => (
                    <div style={{ marginTop: 10 }}>
                        <ArticalTitle Name={'文章'}></ArticalTitle>
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

                        </div>
                        <ArticalTitle Name={'评论'}></ArticalTitle>
                        <div className='ShowComment'>
                            <Comment ArticleId={this.props.match.params.Id}></Comment>
                        </div>
                    </div>
                )}
            </GlobalContext.Consumer>
        )
    }
} 