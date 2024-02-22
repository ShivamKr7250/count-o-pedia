import logo from "../images/react.png"

function MainHeader() {
    return (
        <div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
            <img src={logo} style={{height:"35px", verticalAlign: "top"}}></img>
           <span className="h2 pt-4 text-white-50">React Course - Task-O-Pedia</span> 
        </div>
    )
}

const styleSubHeader = {
    color: "blueviolet",
    backgroundColor: "lightgray",
};

function SubHeader() {
    return (
        <p style={styleSubHeader} className="text-center">It will be Exciting Journey</p>
    )
}

const Header = () => {
    return (
        <div>
            <MainHeader />
            <SubHeader />
        </div>
    )
}

export default Header;