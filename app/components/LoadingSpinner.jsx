import { CSSProperties } from 'react';
import { PacmanLoader } from 'react-spinners'

export default function LoadingAuthorization({text}) {
  const override = {
    display: 'flex',
    margin: '0 auto',
  };

  return (
    <div>
        <PacmanLoader color='#d8b4fe' size={125} aria-label='Loading Spinner' cssOverride={override}/>
        <h3 className='text-center mt-10'>{text}</h3>
    </div>
  );
}
