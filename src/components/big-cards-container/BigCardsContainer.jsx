import { StyledBigCardContainer } from "./styles"
import { BIG_CARDS_INFO } from "../../constants/consts"
import BigCard from "../big-card/BigCard"

const BigCardContainer = () => {

    return <StyledBigCardContainer>
        {BIG_CARDS_INFO.map(card => (
            <BigCard {...card} key={card.id}/>
        ))}


    </StyledBigCardContainer>
}

export default BigCardContainer