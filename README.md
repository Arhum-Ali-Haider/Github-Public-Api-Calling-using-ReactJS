# Github Public Repositories Viewer

This is a simple React web application that allows you to view the public repositories on Github. It fetches the data from the Github API and displays it in a paginated table format.

## How to Run the App

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
   ```
   npm install
   ```
4. Start the development server with the following command:
   ```
   npm start
   ```
5. The app should now be running at `http://localhost:3000` in your web browser.

## Usage

Upon opening the app in your browser, you will see a "Click To Get Public Repositories" button. Click on the button to trigger the API call and fetch the list of public repositories from Github.

The repositories will be displayed in a table format with the following columns:

- Name: The name of the repository.
- Full Name: The full name of the repository, including the username or organization name.
- Owner: The login username of the repository owner.
- Repository URL: The URL of the repository on Github.
- Description: A brief description of the repository.

The table displays a maximum of 5 repositories per page. You can navigate between pages using the pagination buttons at the bottom of the table.

## Components

The app is composed of the following React components:

1. **ApiCalling**: This is the main component responsible for making the API call to fetch the public repositories. It renders the `Trigger` component to trigger the API call and passes the retrieved data to the `DisplayData` component for rendering.

2. **Trigger**: This is a simple button component that triggers the API call when clicked. It receives a function as a prop and calls it when the button is clicked.

3. **DisplayData**: This component displays the fetched repository data in a paginated table format. It receives the data as a prop and uses the `Pagination` component for navigating between pages.

4. **Pagination**: The pagination component is responsible for rendering the pagination buttons and handling page navigation. It receives the current page number, total number of pages, and a function to handle page changes as props.

## Dependencies

This app relies on the following external dependencies:

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API calls.
- React-dom: Provides DOM-specific methods that can be used at the top level of the app.
- React.StrictMode: A wrapper component to highlight potential problems in the application during development.
- reportWebVitals: A function to measure performance metrics in the app.

## Note

Please keep in mind that the Github API has rate limits for unauthenticated requests. If you encounter any issues with fetching the data, it may be due to exceeding the rate limit. You can consider using an authentication token to increase the rate limit for your requests.

Feel free to explore, modify, and enhance the app as you wish. Happy coding!
