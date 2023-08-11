import React, { Component } from 'react'
import { createEditor } from '@textbus/editor';
import '@textbus/editor/bundles/textbus.min.css';

const editor = createEditor();
let editorHTML;

export default class TextbusEditor extends Component {
    state ={
        value:null
    }
    componentDidMount() {
        const editor = createEditor();
        editor.mount(this.refs.editorContainer)
        editor.onChange.subscribe(() => {
            this.props.getContent(editor.getHTML())
        });
    }  

    render() {
        return (
                <div ref="editorContainer" /> 
        );
    }
}
