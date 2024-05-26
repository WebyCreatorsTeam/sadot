import { FC } from 'react'
import Logo from '/logo-sadot.svg'
import Ayelet from '/aelet.webp';

const Header: FC = () => {
    return (
        <header className=''>
            {/* logo */}
            <img src={Logo} alt="הלוגו של שדות"
                width={300} height={200}
            />

            {/* Enter text */}
            <p>
                נעים מאוד, אני 
                    אילת אליהו
                 ממושב שוקדה בשדות נגב. אומנות בשבילי זה מרחב שמאפשר
                לתת מקום, לעבד רגשות. העבודה בפרחים ובחימר מכניסה לשקט פנימי , ודרכו החיבור
                לאוצרות שלנו. משם אני יוצרת ולשם אני אוהבת לקחת את הסדנאות שלי, בנעימות ונינוחות.
            </p>

            {/* Image of Ayelet and text about */}
            <div className='ayelet_info'>
                <div>
                    <img src={Ayelet} alt="איילת יושבת על כיסא ברקע של פרחים" width={710} height={351} />
                </div>
                <div>
                    <p>
                        למדתי עבודה סוציאלית, קרמיקה, אדריכלות, פסיכולוגיה יהודית,
                        עיצוב מטבחים ועוד. תמיד רציתי לשלב אומנות ואנשים. למדתי גם
                        שזירת פרחים, וזו הפכה לתשוקה. כשהתחילה הקורונה היו
                        הרבה חתונות קטנות, החלטתי ללכת על זה, וזה היה מאוד מוצלח.
                        בפרחים יש משהו שמאוד מרגיע אנשים. העסק הוקם לפני כארבע
                        שנים והוא כולל שירותי עיצוב אירועים קטנים, דוכן תכשיטי פרחים באירועים וסדנאות.
                    </p>
                </div>
            </div>
        </header >
    )
}

export default Header