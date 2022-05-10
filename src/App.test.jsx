import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
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
    await screen.findByRole('heading', {
      name: /shape: quadruped/i
    });
  });

  it.skip('Should test the next and prev page button', async() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // should wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading pokedex/i));

    // find the next button
    const nextButton = await screen.findByRole('button', {
      name: /next page/i
    });

    // click the next button
    userEvent.click(nextButton);

    // test if loading message appears
    screen.getByText(/loading pokedex/i);

    // see if bellsprout is visible
    await screen.findByRole('heading', {
      name: /bellsprout/i
    });

    // click the next page button again
    userEvent.click(nextButton);

    // wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    // see if cloyster image is visible
    await screen.findByRole('img', {
      name: /image of cloyster/i
    });

    // find previous button
    const prevButton = screen.getByRole('button', {
      name: /prev page/i
    });

    // click prev button - back to page 2
    userEvent.click(prevButton);

    // see if image of voltorb is visible
    await screen.findByRole('img', {
      name: /image of voltorb/i
    });
  });

  it.skip('Should test the search input', async() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // should wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading pokedex/i));

    // grab the search input
    const searchBox = screen.getByRole('textbox');

    // type in "saur"
    userEvent.type(searchBox, 'saur');

    // grab submit search button
    const searchButton = screen.getByRole('button', {
      name: /submit search/i
    });

    // click submit search
    userEvent.click(searchButton);

    // should wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading pokedex/i));

    //check to see if bulbasuar is present
    await screen.findByRole('heading', {
      name: /bulbasaur/i
    });

  });


  it.skip('Should test the detail page using inital entries and initial index', async() => {
    render(
      <MemoryRouter
        initialEntries={['/pokemon/5ff4fb7cd89993a89cc6544f', '/pokemon/?page=2', '/pokemon/?search=onix']}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>
    );
    
    // initialEntries 0
    // // should wait for loading message to be removed
    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    // should load butterfree
    await screen.findByRole('heading', {
      name: /butterfree/i
    });

    // initialEntries 1
    // should wait for loading message to be removed
    // await waitForElementToBeRemoved(screen.getByText(/loading/i));

    // // should load butterfree
    // await screen.findByRole('heading', {
    //   name: /charizard/i
    // });


    // initialEntries 2
    // should wait for loading message to be removed
    // await waitForElementToBeRemoved(screen.getByText(/loading/i));

    // // should load butterfree
    // await screen.findByRole('heading', {
    //   name: /onix/i
    // });


  });

});