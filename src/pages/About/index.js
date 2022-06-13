import { Provider } from 'react-redux';
import store from '../../store';
import Navbar from '../../components/Navbar/Nav.js'
import Contact from '../../components/contact/index.js'
function About() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Contact/>
    </Provider>
  );
}

export default About;