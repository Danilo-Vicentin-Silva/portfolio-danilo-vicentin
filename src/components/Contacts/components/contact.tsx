import { ContactStyled } from "../style/style";

interface Props {
    title: string
    icon: string
    link: string
}

const Contact: React.FC<Props> = ({}) => {
    return ( <ContactStyled></ContactStyled> );
}
 
export default Contact;