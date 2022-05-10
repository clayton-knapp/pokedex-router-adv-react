import fetch from 'cross-fetch';
global.fetch = fetch;

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { data, data801 } from './tests/fixtures/pokedex';

const mockNewUser = {
  "access_token": "MOCK_TOKEN",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "dgiTgUntpktpsERdDEzXxQ",
  "user": {
    "id": "12345",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "new@user.com",
    "email_confirmed_at": "2022-05-10T18:10:08.893344031Z",
    "phone": "",
    "last_sign_in_at": "2022-05-10T18:10:08.896137682Z",
    "app_metadata": {
      "provider": "email",
      "providers": [
        "email"
      ]
    },
    "user_metadata": {},
    "identities": [
      {
        "id": "12345",
        "user_id": "12345",
        "identity_data": {
          "sub": "12345"
        },
        "provider": "email",
        "last_sign_in_at": "2022-05-10T18:10:08.891327367Z",
        "created_at": "2022-05-10T18:10:08.891373Z",
        "updated_at": "2022-05-10T18:10:08.891376Z"
      }
    ],
    "created_at": "2022-05-10T18:10:08.888778Z",
    "updated_at": "2022-05-10T18:10:08.897613Z"
  }
};


const mockExistingUser = {
  "access_token": "MOCK_TOKEN",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "j6O76JOHKI9MfFer6BFwDg",
  "user": {
    "id": "MOCK_ID_12345",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "bob@bob.com",
    "email_confirmed_at": "2022-05-10T00:28:44.177424Z",
    "phone": "",
    "confirmed_at": "2022-05-10T00:28:44.177424Z",
    "last_sign_in_at": "2022-05-10T18:27:39.024492607Z",
    "app_metadata": {
      "provider": "email",
      "providers": [
        "email"
      ]
    },
    "user_metadata": {},
    "identities": [
      {
        "id": "MOCK_ID_12345",
        "user_id": "MOCK_ID_12345",
        "identity_data": {
          "sub": "MOCK_ID_12345"
        },
        "provider": "email",
        "last_sign_in_at": "2022-05-10T00:28:44.175554Z",
        "created_at": "2022-05-10T00:28:44.175604Z",
        "updated_at": "2022-05-10T00:28:44.175607Z"
      }
    ],
    "created_at": "2022-05-10T00:28:44.173225Z",
    "updated_at": "2022-05-10T18:27:39.025686Z"
  }
};

const server = setupServer(
  // mock route to pokedex api
  rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex', (req, res, ctx) =>
    res(ctx.json(data801))
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