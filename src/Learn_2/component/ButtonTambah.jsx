import React from 'react';

function ButtonTambah({increase}){
  
    return(
        <div>
            <button onClick={increase}>Tambah</button>
        </div>
    );
}
export default ButtonTambah;