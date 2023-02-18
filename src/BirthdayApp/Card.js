import Data from "./Data";

export default function Card(){
    const todayBday=(person)=>{
        let currentDay=new Date().getDate();
        let CurrentMonth=new Date().getMonth();
       
       let filter= person.filter((data)=>{
        let day =new Date(data.birthday).getDate();
        let month= new Date(data.birthday).getMonth()
        return currentDay==day && CurrentMonth==month;
       })
       return filter
    }
   console.log(todayBday(Data))
    return(
        <div info= {todayBday(Data)}>
           
        </div>
    )
}