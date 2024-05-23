import { FC } from 'react'
import path from '/icons/path.svg'
import waze from '/icons/waze.svg'
import call from '/icons/call.svg'
import whatsap from '/icons/whatsap.svg'

const Footer: FC = () => {
    return (
        <footer>
            <div className='footer-info'>
                <p className='footer-info__text'>דרכי הגעה</p>
                <a href="https://maps.app.goo.gl/f54FHP9cDHFJTjy49" target="_blank" aria-label="גוגל מפות">
                    <img src={path} alt="" width={50} height={50} />
                </a>
                <a href="https://ul.waze.com/ul?place=ChIJKXDcnHF_AhURFfkw3bhj5YA&ll=31.42209800%2C34.52438300&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" aria-label="וויז">
                    <img src={waze} alt="" width={50} height={50} /> 
                </a>
            </div>
            <div className='footer-info'>
                <p className='footer-info__text'>מושב שוקדה</p>
                <a href='https://wa.me/972506353830' target="_blank" aria-label="וואטסאפ"> {/* ?text=היי%20אשמח%20לפרטים */}
                    <img src={whatsap} alt="" width={50} height={50} />
                </a>
                <a href="tel:0506353830" aria-label="טלפון">
                    <img src={call} alt="" width={50} height={50} />
                </a>
            </div>
            <div className='payment-details'>
                <p>
                    לתשלום בביט ניתן להעביר למספר טלפון:
                </p>
                <a href="tel:0506353830" aria-label="מספר טלפון: 050-635-3830">
                    050-635-3830
                </a>
            </div>
        </footer>
    )
}

export default Footer