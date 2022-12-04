import Nav from './components/layout/Nav'
import Login from './components/layout/Login'
import Banner from './components/layout/Banner'

function App() {
    return (
        <div className="flex flex-col space-y-20">
            <Nav />
            <div className="flex flex-col lg:flex-row lg:justify-around lg:mx-10">
                <Banner />
                <Login />
            </div>
        </div>
    );
}

export default App;
