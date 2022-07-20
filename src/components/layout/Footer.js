import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer=()=> {
  return (
    <MDBFooter bg="dark" variant="dark" fixed="bottom" style={{width:'100%'}}>
      <div className='text-center p-1' style={{ backgroundColor: 'black', color:'gray' }}>
        &copy; {new Date().getFullYear()} Copyright:{' EverythingAndNothing.com '}
        <p></p>
          
       
      </div>
    </MDBFooter>
  );
}
export default Footer