import Navbar from '../../components/Navbar/Nav.js'
import Contacts from '../../components/contact/index.js'
//redux
import { Provider } from 'react-redux';
import store from '../../store';
function Home() {
    
    return (
        <Provider store={store}>
            <Navbar/>
            <Contacts/>
        </Provider>   
    );
}

export default Home;