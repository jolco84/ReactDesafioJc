const Header = (props) => {
    return (
        <div>
            <h1 className='header'> {props.title} </h1>
            <hr style={{margin: '1% 25% 1% 25%'}}></hr>
        </div>
    )
}

export default Header;