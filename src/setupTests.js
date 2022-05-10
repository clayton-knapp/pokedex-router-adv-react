import fetch from 'cross-fetch';
global.fetch = fetch;

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  // pokedexData20,
  pokedexData801
} from './tests/fixtures/pokedex';
import { mockNewUser, mockExistingUser } from './tests/fixtures/supabase-users';

const server = setupServer(
  // mock route to pokedex api
  rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex', (req, res, ctx) =>
    res(ctx.json(pokedexData801))
  ),
  //mock route to sign up a new user
  rest.post('https://jwgemjvtpyxqivjcbvrm.supabase.co/auth/v1/signup', (req, res, ctx) =>
    res(ctx.json(mockNewUser))
  ),
  //mock route to sign in existing user
  rest.post('https://jwgemjvtpyxqivjcbvrm.supabase.co/auth/v1/token', (req, res, ctx) =>
    res(ctx.json(mockExistingUser))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());