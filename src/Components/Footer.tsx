import { FC } from 'react'
import path from '/icons/path.svg'
import waze from '/icons/waze.svg'
import call from '/icons/call.svg'
import whatsap from '/icons/whatsap.svg'

const Footer: FC = () => {
    return (
        <footer>
            <h2>דרכי הגעה</h2>
            <div className='footer-info'>
                <div>
                    <a href="https://maps.app.goo.gl/f54FHP9cDHFJTjy49">
                        <img src={waze} alt="" width={50} height={50} />
                    </a>
                </div>
                <div>
                    <img src={path} alt="" width={50} height={50} />
                </div>
            </div>
            <p>מושב שוקדה</p>
            <div className='footer-info'>
                <div>
                    <img src={whatsap} alt="" width={50} height={50} />
                </div>
                <div>
                    <a href="tel:0506353830">
                        <img src={call} alt="" width={50} height={50} />
                    </a>
                </div>
            </div>
            <div>
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