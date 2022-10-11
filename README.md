# Calculator API

## Available Endpoints

### GET '/history' returns all calculations from calculations table 
### POST '/history' adds calculation to calculations table 
    Body parameters {
        calc: string
        status: SUCCES || ERROR 
    }
    *DOES NOT CONTAINS ANY VALIDATION*
## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn start`

Runs the app in the prodcution mode.

### `yarn test`

Runs available tests together with linter fixes.
