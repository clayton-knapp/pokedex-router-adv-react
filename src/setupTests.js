import fetch from 'cross-fetch';
global.fetch = fetch;

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { data, data801 } from './tests/fixtures/pokedex';

// https://pokedex-alchemy.herokuapp.com/api/pokedex

const server = setupServer(
  rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex', (req, res, ctx) => 
    res(ctx.json(data801))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());