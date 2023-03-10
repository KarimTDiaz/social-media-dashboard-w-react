import { BigCardContent, BigCardContentItem, BigCardSocial, BigCardTop, BigCardUser, StyledBigCard } from "./styles"

const BigCard = ({borderColor,social,name,number,target,results}) => {
    return <StyledBigCard borderColor={borderColor}>
        <BigCardTop>
            <BigCardSocial {...social}/>
            <BigCardUser>{name}</BigCardUser>
        </BigCardTop>

        <BigCardContent>
        <BigCardContentItem color='white' size='56px'>{number.toLocaleString('de-DE')}</BigCardContentItem>
        <BigCardContentItem space='0.4rem' size='12px'>{target}</BigCardContentItem>
        </BigCardContent>

    </StyledBigCard>


   
}
export default BigCard