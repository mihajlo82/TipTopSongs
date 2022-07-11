const UseSingleRow = ({item}) => {

    const formatDate = () => {
        let currdate = item.duration;
        
        let min = parseInt(currdate / 60);
        if(min < 10){
           min='0'+min;
        }
       
        let sec = parseInt(currdate%60);
        if(sec < 10){
         sec='0'+sec;
       }
   
        let fullTime = `${min}:${sec}`;
        return fullTime;
     }
  return {formatDate}
}

export default UseSingleRow