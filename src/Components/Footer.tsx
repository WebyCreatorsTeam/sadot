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
                <div>
                    <a href="https://maps.app.goo.gl/f54FHP9cDHFJTjy49">
                        <img src={waze} alt="" width={50} height={50} />
                    </a>
                </div>
                <div>
                    <img src={path} alt="" width={50} height={50} />
                </div>
            </div>
            <div className='footer-info'>
                <p className='footer-info__text'>מושב שוקדה</p>
                <div>
                    <img src={whatsap} alt="" width={50} height={50} />
                </div>
                <div>
                    <a href="tel:0506353830">
                        <img src={call} alt="" width={50} height={50} />
                    </a>
                </div>
            </div>
            <div className='payment-details'>
                <p>
                    לתשלום בביט ניתן להעביר למספר טלפון:
                </p>
                <p>
                    <a href="tel:0506353830">
                        050-635-3830
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer