import { Gallery } from "../components/Gallery"
import { ProductSelection } from "../components/ProductSelection"
import '../styles/homepage.css'

export function Home(){
    return(
        <div className="home">
            <Gallery />
            <ProductSelection />
        </div>
    
    )
}