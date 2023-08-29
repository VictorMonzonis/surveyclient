import React from 'react';
import SurveyList from './component/SurveyList';

function App() {
  return (
    <div className="App">
      <SurveyList fetchFunction={fetch} /> 
    </div>
  );
}

export default App;