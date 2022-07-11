import './Table.css';

const ModalRow = ({item, setClickRow, formatDate}) => {
  return (
    <article className='modalWrapp'>
      <div className='modalMain'>
          <p><b>Position:</b> {item.position}</p>
          <p><b>Title:</b> {item.title}</p>
          <p> <b>Author:</b> {item.artist.name}</p>
          <p><b>Duration: </b> {formatDate()}</p>
          <button className='modalBtnClose' onClick={()=> setClickRow(false)} >Close</button>
      </div>
    </article>
  )
}

export default ModalRow