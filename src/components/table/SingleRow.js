import {useState} from 'react'
import React from 'react';
import './Table.css';
import UseSingleRow from './customHooks/UseSingleRow'
import ModalRow from './ModalRow';

const SingleRow = ({item, ind}) => {
  const [clickRow, setClickRow]  = useState(false);
  const {formatDate} = UseSingleRow({item});

  return (
    <>
    <tr onClick={() => setClickRow(true)} className='tr' style={{ backgroundColor: ind % 2 === 0 ? 'white' : '#c5c6c7',  color: ind % 2 === 0 ? '#5b5c5e' : 'white', fontWeight:'bold'}}>
        <td>{item.artist.name}</td>
        <td>{item.title}</td>
        <td>{formatDate()}</td>
    </tr>

    {clickRow && <ModalRow item={item}  setClickRow={setClickRow} formatDate={formatDate}/> }
    </>
  )
}

export default SingleRow