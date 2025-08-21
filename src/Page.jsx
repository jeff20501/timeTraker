import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import { Daily } from './components/Daily'
import './Page.css'
import { Monthly } from './components/Monthly'
import { Weekly } from './components/Weekly'
import { Nav } from './components/Nav'
export function Page(){
    //states
    const [data, setData]=useState([])
    const [tabs, setTabs]=useState('daily')

    //useEffects
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const res = await fetch('/data.json')
                const timeData = await res.json()
                const withId = timeData.map((num)=>({
                    ...num,
                    id:nanoid()
                }))
                setData(withId)
            }catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [])
    console.log(data)

    //mapped data
    const dailyData=data.map((data)=>{
        return(
            <Daily
                key={data.id}
                id={data.id}
                title={data.title}
                pic={data.pic}
                background={data.background}
                data={data.timeframes.daily}
            />
        )
    })

    const weeklyData=data.map((data)=>{
        return(
            <Weekly
                key={data.id}
                id={data.id}
                title={data.title}
                pic={data.pic}
                background={data.background}
                data={data.timeframes.weekly}
            />
        )
    })

    const monthlyData=data.map((data)=>{
        return(
            <Monthly
                key={data.id}
                id={data.id}
                title={data.title}
                pic={data.pic}
                background={data.background}
                data={data.timeframes.monthly}
            />
        )
    })

    return(
        <article className='page'>
            <section>
                <Nav changeTab={setTabs}/>
            </section>
            <section className='wrapper'>
                {tabs==='daily'&&dailyData}
                {tabs==='weekly'&&weeklyData}
                {tabs==='monthly'&&monthlyData}
                
            </section>
        </article>
    )
}