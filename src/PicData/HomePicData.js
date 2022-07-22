import Concrete from "../Pictures/HomePics/Concrete.jpg"
import Masonry from "../Pictures/HomePics/Masonry.jpg"
import AboutUS from "../Pictures/HomePics/About.jpg"
import YardClean from "../Pictures/HomePics/Yard.jpg"
import Drainage from "../Pictures/HomePics/Drainage.jpg"
import Snow from "../Pictures/HomePics/SnowRemoval.jpg"
import {v4 as uuidv4} from "uuid";
const HomePicData = [
    {
        id:uuidv4(),
        "image": Concrete,
        "title": "Concrete",
        "description":"Concrete Description",
        "buttontext":"View Concrete",
        "alt":"Concrete Picture",
        "route":"./concrete",
    },
    {
        id:uuidv4(),
        "image":Drainage,
        "title":"Drainage Systems",
        "description":"Drainage Description",
        "buttontext":"View Drainage",
        "alt":"Drainage Picture",
        "route":"./Drainage"
    },
    {
        id:uuidv4(),
        "image":Masonry,
        "title":"Masonry",
        "description":"Masonry Description",
        "buttontext":"View Masonry",
        "alt":"Masonry Picture",
        "route":"./Masonry"
    },
    {
        id:uuidv4(),
        "image":YardClean,
        "title":"Yard Clean up",
        "description":"Yard Clean Description",
        "buttontext":"View Yard Cleaning",
        "alt":"Yard Picture",
        "route":"./YardCleanUp"
    },
    {
        id:uuidv4(),
        "image":Snow,
        "title":"Snow Removal",
        "description":"Snow Removal Description",
        "buttontext":"View Snow Removal",
        "alt":"Snow Removal Picture",
        "route":"./SnowRemoval"
    },
    {
        id:uuidv4(),
        "image":AboutUS,
        "title":"About Us",
        "description":"About Us Description",
        "buttontext":"View About us",
        "alt":"About Us Picture",
        "route":"./AboutUs"
    }
]
export default HomePicData;