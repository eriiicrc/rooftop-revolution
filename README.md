# DOCUMENTATION

## OVERVIEW

This web application allows users to search for clients using a CUPS number and redirects them to a Client Page displaying comprehensive personal and supply information.

- Features

    - Search View '/search':

        Input field for entering the CUPS number.
        Search button to redirect to the Client Page (/client).
        Displays an error message if the CUPS number is empty or does not match any client.

    - Client View '/client':

        Displays personal and supply information of the client.
        If supply points cannot be fetched or there is no supply information available, the supply information card will not appear.
        Indicates if a client is eligible for the Revolution Rooftop product and shows applicable discounts.

- Components and Logic

    - Components:

        Responsible for rendering information and emitting events.
        Minimal business logic to maintain clean separation of concerns.

    - Composable (useClient):

        Contains all the business logic for client and supply information handling.
        Manages state and interactions related to client data.

    - State Management:

        Utilizes Pinia for state management.
        Fetches and stores client and supply data

## USAGE

- Searching for a Client

    - Navigate to the /search view.
    - Enter the CUPS number in the input field.
    - Click the "Search" button.
    - If the CUPS number is valid, you will be redirected to the /client view.

- Viewing Client Information

    - The /client view displays:
        - Personal information of the client.
        - Supply information (if available).
        - Eligibility for Revolution Rooftop and applicable discounts.


## COMPOSABLE: useClient

The useClient composable manages the business logic for fetching and displaying client and supply information. Below is an overview of its functionality:

- Methods and Properties

    - Properties:

        - error: Indicates if there was an error during client search.
        - isRevolutionRooftopAllowed: Indicates if the client is eligible for the Revolution Rooftop product.
        - discount: Holds the discount information for the client.

    - Methods:

        - useNavigateToClient(): Navigates to the client page.
        - useCleanError(): Clears the error state.
        - useFetchClients(): Fetches the list of clients from the store.
        - useSearchClient(cups: string): Searches for a client by CUPS number.
        - useInitClientPage(): Initializes the client page by fetching necessary data and handling navigation.



## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```
