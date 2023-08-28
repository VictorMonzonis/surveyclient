const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(cors());

async function loadJSONFromFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading JSON from file ${filename}: ${error.message}`);
    return [];
  }
}

app.get('/Surveys', async (req, res) => {
  const surveys = await loadJSONFromFile('./data/surveys.json');
  res.json(surveys);
});


app.get('/SurveyDetails/:id', async (req, res) => {
  const surveyId = parseInt(req.params.id);

  const surveyDetails = await loadJSONFromFile('./data/survey-details.json');
  const survey = surveyDetails.find(survey => survey.id === surveyId);
    
  if (survey) {
    res.json(survey);
  } else {
    res.status(404).json({ error: 'Survey not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// http://localhost:3000/Surveys
// http://localhost:3000/SurveyDetails/1
