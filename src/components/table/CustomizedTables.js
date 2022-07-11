import './Table.css';
import TableWrapp from './TableWrapp';
import EnhancedTable from './EnhancedTable'
import axios from 'axios';
import {useState, useEffect} from 'react';

const CustomizedTables = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
      axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/chart')
          .then(res => setData(res.data.tracks.data))
          .catch( err => console.log(err))
}, [])

  return (
    <section className='tableWrapp'>
        <TableWrapp data={data} setData={setData} />
        <EnhancedTable data={data} setData={setData}/>
    </section>
  )
}

export default CustomizedTables