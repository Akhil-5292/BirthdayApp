import Data from "./Data"
import style from './BirthdayApp.module.css'
export default function BirthdayApp(){

    const old=(personAge)=>{
        let year=new Date(personAge).getFullYear();
        let currentYear=new Date().getFullYear();
        let age=currentYear-year
        return age
        // console.log(age)
    }

    return(
        <div className={style.wrapper}>
            <h1>Birthday Reminder App</h1>
        <div className={style.list_main}>
                {
                    Data.map((x)=><div key={x.id} className={style.list}>
                        <div className={style.user}>
                        <img className={style.pic} src={x.image}/>
                        <div>
                        <h4>{x.name}</h4>
                    <h5>{old(x.birthday)}Year</h5></div>
                    </div>
                    </div>)
                }
            
        </div>
        </div>
    )
}