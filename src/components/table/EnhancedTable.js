import './Table.css'
import SingleRow from './SingleRow'
import TableHead from './TableHead'

const EnhancedTable = ({data, setData}) => {
  return (
    <table>
        <TableHead data={data} setData={setData} />
        <tbody>
            {data.length > 0 && data.map((item, ind) => <SingleRow key={item.id} item={item} ind={ind} />)}
        </tbody>
    </table>
  )
}

export default EnhancedTable