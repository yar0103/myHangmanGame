import LetterGrid from './LetterGrid.js';
import ButtonGrid from './ButtonGrid.js';
import { useState } from 'react';

export default function ({secretWord, maxErrors, isShown}) {

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  const letterGuessedHandler = function(letter){
    let val = letter.toLowerCase();
    setGuessedLetters(prev => [...prev,val])

    if(secretWord.toLowerCase().indexOf(val) === -1){
      setErrorCount(errorCount +1);
    }
  };

  return (
    <div className={isShown ? '' : 'hidden'}>
      <div>
        남은 횟수 : {maxErrors - errorCount}
      </div>
      <LetterGrid 
        secretWord={secretWord} 
        guessedLetters={guessedLetters}
      />
      <ButtonGrid letterGuessed={letterGuessedHandler} isShown={errorCount < maxErrors}/>
    </div>
  );
}
