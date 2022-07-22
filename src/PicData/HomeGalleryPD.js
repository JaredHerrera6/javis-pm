import Stamped from "../Pictures/ConcretePics/Stamped-11.jpg"
import Concrete from "../Pictures/ConcretePics/Concrete-2.jpg"
import Steps from "../Pictures/ConcretePics/Steps-1.jpg"
import WaterProof from "../Pictures/DrainageSystemPics/WaterProof-5.jpg"
import Drain from "../Pictures/DrainageSystemPics/Drain-1.jpg"
import DownSpout from "../Pictures/DrainageSystemPics/DownSpout-1.jpg"
import Masonry from "../Pictures/MasonryPics/Masonry-3.jpg"
import YardClean from "../Pictures/HomePics/Yard.jpg"
import Snow from "../Pictures/HomePics/SnowRemoval.jpg"
import AboutUS from "../Pictures/HomePics/About.jpg"

import {v4 as uuidv4} from "uuid"
const HomeGalleryPD = [
    {
        id:uuidv4(),
        "image": Concrete,
        "title": "Concrete",
        "alt":"Concrete Picture",
    },
    {
        id:uuidv4(),
        "image": Stamped,
        "title": "Stamped Concrete",
        "alt":"Stamped Concrete Picture",
    },
    {
        id:uuidv4(),
        "image":Steps,
        "title":"Concrete Steps",
        "alt":"Concrete Steps Picture",
    },
    {
        id:uuidv4(),
        "image":WaterProof,
        "title":"WaterProofing",
        "alt":"WaterProofing Picture",
    },
    {
        id:uuidv4(),
        "image":Drain,
        "title":"Drainage System",
        "alt":"Drain Picture",
    },
    {
        id:uuidv4(),
        "image":DownSpout,
        "title":"DownSpout",
        "alt":"DownSpout Picture",
    },
    {
        id:uuidv4(),
        "image":Masonry,
        "title":"Masonry",
        "alt":"Masonry Picture",
    },
    {
        id:uuidv4(),
        "image":YardClean,
        "title":"Yard Clean up",
        "alt":"Yard Picture",
    },
    {
        id:uuidv4(),
        "image":Snow,
        "title":"Snow Removal",
        "alt":"Snow Removal Picture",
    },
    {
        id:uuidv4(),
        "image":AboutUS,
        "title":"About Us",
        "alt":"About Us Picture",
        
    }
]
export default HomeGalleryPD;