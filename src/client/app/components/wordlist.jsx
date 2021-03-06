import React from 'react';
import Word from './word.jsx';

var WordList = (props) => {
  return (
    <div>
      {props.list.map(word => <Word word={word}/>)}
    </div>
  );
};

export default WordList;