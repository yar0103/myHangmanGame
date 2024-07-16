import Letter from './Letter.js';

export default function ({secretWord, guessedLetters}) {

  let letters = secretWord.split('').map((letter, i) => {
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    return <Letter value={letter} isShown={isShown} key={i}/>  
  })

  return (
    <div className='flex'>
      {letters}
    </div>
  );
}