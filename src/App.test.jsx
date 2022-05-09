import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Testing components and behavior of App', () => {
  it('Should test the list view, clicking on item to see detail view', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // test if loading message appears
    screen.getByText(/loading pokedex/i);

    // test if pikachu is visable
    const pikachu = await screen.findByRole('heading', {
      name: /pikachu/i
    });

    // test if image of charmeleon is visable
    await screen.findByAltText(/image of charmeleon/i);

    // try clicking on pikachu
    userEvent.click(pikachu);

    // test if loading message appears on detail page
    screen.getByText(/loading pokemon/i);

    // see if pikachu's shape is displayed
    screen.findByRole('heading', {
      name: /shape: quadruped/i
    });


  });

});