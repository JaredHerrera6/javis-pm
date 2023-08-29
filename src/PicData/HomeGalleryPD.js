import Stamped from "../Pictures/ConcretePics/Stamped-11.jpg"
import Concrete from "../Pictures/ConcretePics/Concrete-2.jpg"
import Steps from "../Pictures/ConcretePics/Steps-1.jpg"
import Stamped2 from "../Pictures/ConcretePics/Stamped-3.jpg"
import Stamped3 from "../Pictures/ConcretePics/Stamped-16.jpg"
import Stamped4 from "../Pictures/ConcretePics/Stamped-13.jpg"
import Masonry from "../Pictures/MasonryPics/Masonry-3.jpg"

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
        "image":Stamped2,
        "title":"Stamped Concrete",
        "alt":" Stamped Concrete Picture",
    },
    {
        id:uuidv4(),
        "image":Stamped3,
        "title":"Stamped Concrete",
        "alt":"STamped Concrete Picture",
    },
    {
        id:uuidv4(),
        "image":Stamped4,
        "title":"Stamped Concrete",
        "alt":"STamped Concrete Picture"
    },
    {
        id:uuidv4(),
        "image":Masonry,
        "title":"Masonry",
        "alt":"Masonry Picture",
    }
]
export default HomeGalleryPD;