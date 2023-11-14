import React from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function EmojiPicker({emojiSelect}) {

   const selected=(value)=>{
        emojiSelect(value)
    }

    return (
        <Picker data={data} onEmojiSelect={selected} />
      )
}