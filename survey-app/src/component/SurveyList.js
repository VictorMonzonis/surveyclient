import React, { useState, useEffect } from 'react';

function SurveyList({ fetchFunction }) {
  const [surveys, setSurveys] = useState([]);

  var stop = fetchFunction('http://localhost:4000/Surveys')
  .then(response => console.log(response));

  const inputRef = React.useRef();
  
  useEffect(() => {
    // Fetch surveys from the REST endpoint
    fetchFunction('http://localhost:4000/Surveys')
      .then(response => response.json())
      .then(data => setSurveys(data))
      .catch(error => console.error('Error fetching surveys:', error));
  }, []);

  return (
    <div>
      <h1>Survey List</h1>
      <ul>
        {surveys.map(survey => (
          <li key={survey.id}>
            <h2>{survey.name}</h2>
            <p>Length: {survey.length} minutes</p>
            <p>Reward: {survey.reward} {survey.currency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SurveyList;