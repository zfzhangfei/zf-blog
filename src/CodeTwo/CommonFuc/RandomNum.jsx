import React from 'react'

const usedKeys = new Set();
export default function RandomNum() {
    let newKey;
    do {
      newKey = Math.floor(Math.random() * 1000000);
    } while (usedKeys.has(newKey));
    usedKeys.add(newKey);
    return newKey;
}
