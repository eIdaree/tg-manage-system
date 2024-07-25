import Button from "../components/Button"

const Footer = () => {
    return(
        <footer>
            <Button to='/'>Main</Button>
            <Button to='/workers'>Workers</Button>
            <Button to='/profile'>Profile</Button>
        </footer>
    )
}

export default Footer