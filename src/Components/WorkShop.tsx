import { FC } from 'react'
import { workshopImages } from './workshopArray/workshopArray'

const WorkShop: FC = () => {
    return (
        <section>
            <h2>סדנאות:</h2>
            <div className='workshop__options'>
                {workshopImages.map((wrk, idx) => (
                    <div key={idx} className='workshop__options--item'>
                        <div className='workshop__options--item-image'>
                            <img src={wrk.img} alt={wrk.alt} width={323} height={430} />
                        </div>
                        <div className='workshop__options--window'>
                            <div className='workshop__options--text'>
                                <h3>{wrk.title}:</h3>
                                <p>{wrk.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default WorkShop