import { v4 } from "uuid"
import { ICONS } from "./icons"

const BIG_CARDS_INFO = [
    {
        id:v4(),
        borderColor:'#178FF5',
        icon:ICONS.facebook,
        name:'@nathanf',
        number:1987,
        target:'FOLLOWERS',
        results:'12 Today',
        positive:true
    },
    {
        id:v4(),
        borderColor:'#178FF5',
        icon:ICONS.twitter,
        name:'@nathanf',
        number:1044,
        target:'FOLLOWERS',
        results:'99 Today',
        positive:true
    },
    {
        id:v4(),
        borderColor:'linear-gradient(#DF4896 33%, #EE877E 33% 66%,#FDC366 66%)',
        icon:ICONS.instagram,
        name:'@realnathanf',
        number:11000,
        target:'FOLLOWERS',
        results:'1099 Today',
        positive:true
    },
    {
        id:v4(),
        borderColor:'#178FF5',
        icon:ICONS.youtube,
        name:'Nathan F.',
        number:8239,
        target:'FOLLOWERS',
        results:'144 Today',
        positive:true
    }
]

export {BIG_CARDS_INFO}

toLocaleString('en-US')