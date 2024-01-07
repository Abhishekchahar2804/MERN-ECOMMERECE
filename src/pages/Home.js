import Navbar from "../features/navbar/navbar"
import ProductList from "../features/product-list/ProductList"
import LoginPage from "./LoginPage"

const Home = ()=>{
    return (
        <>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
            {/* <LoginPage></LoginPage> */}
        </>
    )
}

export default Home