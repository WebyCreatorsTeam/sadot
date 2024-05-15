import { FC } from 'react'
import path from '../assets/footer-icons/path.png'
import waze from '../assets/footer-icons/waze.png'
import whatsap from '../assets/footer-icons/whatsap.png'

const Footer: FC = () => {
    return (
        <footer>
            <h2>צרו קשר:</h2>
            <div className='footer-info'>
                <div>
                    <img src={whatsap} alt="" width={63} height={63} />
                </div>
                <div>
                    <img src={waze} alt="" width={63} height={63} />
                </div>
                <div>
                    <img src={path} alt="" width={63} height={63} />
                </div>
            </div>
            <div>
                <a href="tel:0506353830">050-635-3830</a>
            </div>
            <div>
                <p>מושב שוקדה</p>
            </div>
            <div>
                <p>
                לתשלום בביט לחץ כאן
                </p>
            </div>
        </footer>
    )
}

export default Footer