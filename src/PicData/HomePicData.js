import Concrete from "../Pictures/HomePics/Concrete.jpg"
import Masonry from "../Pictures/HomePics/Masonry.jpg"
import AboutUS from "../Pictures/HomePics/About.jpg"
import Drainage from "../Pictures/HomePics/Drainage.jpg"
import {v4 as uuidv4} from "uuid";
const HomePicData = [
    {
        id:uuidv4(),
        "image": Concrete,
        "title": "Concrete",
        "description":"Concrete Services and Designs",
        "buttontext":"View Concrete",
        "alt":"Concrete Picture",
        "route":"./concrete",
    },
    {
        id:uuidv4(),
        "image":Drainage,
        "title":"Drainage Systems",
        "description":"Drainage System Solutions",
        "buttontext":"View Drainage",
        "alt":"Drainage Picture",
        "route":"./Drainage"
    },
    {
        id:uuidv4(),
        "image":Masonry,
        "title":"Masonry",
        "description":"Masonry Services and Designs",
        "buttontext":"View Masonry",
        "alt":"Masonry Picture",
        "route":"./Masonry"
    },
    {
        id:uuidv4(),
        "image":AboutUS,
        "title":"About Us",
        "description":"Learn About Our Company",
        "buttontext":"View About us",
        "alt":"About Us Picture",
        "route":"./AboutUs"
    }
]
export default HomePicData;