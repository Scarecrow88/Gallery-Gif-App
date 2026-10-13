import React from 'react';
import NavBar from './components/navBar.jsx';
import Main from './components/main.jsx';
import Gallery from './components/gallery.jsx';
import Footer from './components/footer.jsx';
function App () {
    return (
        <div className="bodybox">
            <NavBar/>
            <Main/>
            <Gallery/>
            <Footer/>
        </div>
    );
}
export default App;