import { IWorkShop } from "../interface";
import Keramika from "../../assets/workshops-images/keramika.png";
import Stand from "../../assets/workshops-images/stand.png";
import Twist from "../../assets/workshops-images/twist.png";
import WorkShop from "../../assets/workshops-images/workshop.png";


export const workshopImages: Array<IWorkShop> = [
    { img: Keramika, alt: "בחור יושב עם כלי עבודה", title: "קרמיקה", desc: "חוגים וסדנאות חד פעמיות באובניים, בעבודת יד, ובצביעת כלים מוכנים." },
    { img: Stand, alt: "נשים עומדות בעמדת עבודה", title: "דוכן תכשיטים בוטניים", desc: "בדוכן אפשר להתקשט בתכשיטים משמחים, קשתות,סיכות לשיער צמידים ודש לבגד." },
    { img: WorkShop, alt: "ידיים של אישה עובדות על פרחים", title: "סדנאות פרחים", desc: "סדנאות ייחודיות ומעיפות בנול פרחוני ומסגרות זכוכית" },
    { img: Twist, alt: "פרחים על השולחן", title: "שזירה לאירועים", desc: "מדייקים יחד עם בעלי השמחה חלומות שנשזרים למרכזי שולחן, חופה, כסא וזר כלה ועיצובי אוירה." },
]