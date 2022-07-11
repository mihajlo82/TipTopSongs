const UseTableWrapp = ({sortValue, data, setData}) => {
   
    const callProperSortingFunc = () => {
         if(sortValue === '1'){
            sortByDateDesc();
          }
          else if (sortValue === '2'){
            sortByDateAsc();
          }else{
            sortByDefault();
          }
    }

    const sortByDateAsc = () => {
        const ascData = [...data.sort((a,b) => a.duration - b.duration)];
        setData(ascData)
    }
  
    const sortByDateDesc = () => {
      const descData = [...data.sort((a,b) => b.duration - a.duration)];
      setData(descData)
     }
    
    const sortByDefault = () => {
        const defaultData = [...data.sort((a,b) => a.position - b.position)];
        setData(defaultData);
    }
  return {callProperSortingFunc}
}
export default UseTableWrapp;