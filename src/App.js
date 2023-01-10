import { RouterProvider } from 'react-router-dom';
import {router} from './Routes/Index'
import { Provider } from 'react-redux'
import { store } from './Redux/store';

function App() {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url(https://dadacrypto.netlify.app/images/backgroundImage.jpg)"
  
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
