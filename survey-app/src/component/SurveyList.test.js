import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import SurveyList from './SurveyList';

describe('SurveyList component', () => {
  const mockSurveys  = [
    { id: 1, name: 'Survey1', length: 10, reward: 1},
    { id: 2, name: 'Survey2' , length: 10, reward: 1},
    // Add more sample survey data as needed
  ];

  it('displays a list of available surveys', async () => {
    const mockFetch = jest.fn(url =>
      Promise.resolve({
        json: () => Promise.resolve(mockSurveys),
      }));

    render(<SurveyList fetchFunction={mockFetch} />); // injecting 'fetch' would be an integration test
    
    // Wait for the asynchronous fetch operation to complete
    await waitFor(() => {
      mockSurveys.forEach(survey => {
        const surveyNameElement = screen.getByText(survey.name);
        expect(surveyNameElement).toBeInTheDocument();
      });
    });
  });
});
