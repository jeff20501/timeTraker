import avatar from './images/image-jeremy.png'
import './Nav.css'
export function Nav(props){
    return(
        <article>
            <section className='nav'>
                <div className='avatar'>
                    <img src={avatar} alt="user's Profile image"/>
                    <div>                        
                        <h3>Report for</h3>
                        <p className='name'>Jeremy<br/>Robson</p>
                    </div>                    
                </div>
                <div className='time'>
                    <button onClick={()=>props.changeTab('daily')}>Daily</button>
                    <button onClick={()=>props.changeTab('weekly')}>Weekly</button>
                    <button onClick={()=>props.changeTab('monthly')}>Monthly</button>
                </div>
            </section>
        </article>
    )
}