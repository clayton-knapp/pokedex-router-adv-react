import fetch from 'cross-fetch';
global.fetch = fetch;

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { data, data801 } from './tests/fixtures/pokedex';

const mockUser = {
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

const server = setupServer(
  // mock route to pokedex api
  rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex', (req, res, ctx) => 
    res(ctx.json(data801))
  ),
  //mock route to sign up a user
  rest.post('https://jwgemjvtpyxqivjcbvrm.supabase.co/auth/v1/signup', (req, res, ctx) => 
    res(ctx.json(mockUser))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());