import DownSpout1 from "../Pictures/DrainageSystemPics/DownSpout-1.jpg"
import DownSpout2 from "../Pictures/DrainageSystemPics/DownSpout-2.jpg"
import Drain1 from "../Pictures/DrainageSystemPics/Drain-1.jpg"
import Drain2 from "../Pictures/DrainageSystemPics/Drain-2.jpg"
import WaterProof7 from "../Pictures/DrainageSystemPics/WaterProof-7.jpg"
import WaterProof8 from "../Pictures/DrainageSystemPics/WaterProof-8.jpg"


import{v4 as uuidv4} from 'uuid';
const DrainagePicData = [
    {
        id:uuidv4(),
        "alt": "Drain Picture",
        "image":Drain1
    },
    {
        id:uuidv4(),
        "alt": "Drain Picture",
        "image":Drain2
    },
    {
        id:uuidv4(),
        "alt": "Water Proof",
        "image":WaterProof7
    },
    {
        id:uuidv4(),
        "alt": "Water Proof",
        "image":WaterProof8
    },
    {
        id:uuidv4(),
        "alt": "DownSpout",
        "image":DownSpout1
    },
    {
        id:uuidv4(),
        "alt": "DownSpout",
        "image":DownSpout2
    },
    
]
export default  DrainagePicData;