import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Product from "./components/Product";
import About from "./components/About";
import Footer from "./components/Footer";

function App()
{
    return (
        <div>
            <Navbar />
            <Searchbar />
            <Product />
            <About />
            <Footer />
        </div>
    );
}
export default App;