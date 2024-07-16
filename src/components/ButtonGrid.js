import Button from './Button.js';

export default function ({letterGuessed, isShown}) {

  let letters = [
    'A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ];

  let buttons = letters.map((letter, i) => {
    return <Button value={letter} key={i} onClick={letterGuessed}/>
  })

  let className = 'flex flex-wrap';

  if(!isShown){
    className += ' hidden';
  }

  return (
    <div className='flex flex-wrap'>
      {buttons}
    </div>
  );
}