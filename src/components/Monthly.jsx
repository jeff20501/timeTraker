import elip from './images/icon-ellipsis.svg'
import './Time.css'
export function Monthly(props){
    const styles={
            '--backgroundColor':props.background
        }
        return(
            <article>
                <section className='BG' style={styles}>
                        <img src={props.pic} alt='image of activity'/>
                </section>
                <section className='tabs'>
                    <div className='title'>
                        <p>{props.title}</p>
                        <img src={elip}/>
                    </div>
                    <div>
                        <h2>{props.data.current}Hrs</h2>
                        <p className='prev'>Last month - {props.data.previous}</p> 
                    </div>          
                </section>            
            </article>
        )
    }