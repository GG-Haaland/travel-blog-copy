// import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Locations from './components/Locations'
// import LocationDetails from './components/LocationDetails'


const App = () => {
  
  return (
    <div className="App">
      <h3>Location Blog</h3>
      <Routes>
        <Route path="/" element={<Locations />} />
          {/* <Route path="/:id" element={<LocationDetails />} /> */}
      </Routes>
     
    </div>
  )
}

export default App

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
