import { CSSProperties } from 'react';
import { PacmanLoader } from 'react-spinners'

export default function AuthorizingSpinner() {
  const override = {
    display: 'flex',
    margin: '0 auto',
  };

  return (
    <div className='mt-10'>
        <PacmanLoader color='#d8b4fe' size={125} aria-label='Loading Spinner' cssOverride={override}/>
        <h3 className='text-center mt-10'>Authorizing...</h3>
    </div>
  );
}
