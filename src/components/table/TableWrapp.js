import './Table.css'
import {useState, useEffect} from 'react'
import UseTableWrapp from './customHooks/UseTableWrapp';

const TableWrapp = ({data, setData}) => {

  const [sortValue, setSortValue] = useState('0');
  const sortByDate = async(e) => setSortValue(e.target.value);
  const {callProperSortingFunc} = UseTableWrapp({sortValue, data, setData});
 
  useEffect(() => callProperSortingFunc(), [sortValue])

  return (
    <article className='sortWrapp'>
        <aside className='asideWrapp'>
            <p>Sortiraj po duzini trajanja: </p>
            <select className='sortDropd' onChange={sortByDate}>
                <option value='0'></option>
                <option value='1'>Najduze</option>
                <option value='2'>Najkrace</option>
            </select>
        </aside>
    </article>
  )
}

export default TableWrapp