//import { Title, ContentBlock } from './Section.styled';


export const Section = ({ title, children }) => {
    return (
        <>
            <h2>{title}</h2>
            <div>{children}</div>
        </>
    )
}
