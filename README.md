Welcome to your new TanStack app! 

# Getting Started

To run this application:

```bash
npm install
npm run start  
```

# Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

## Styling

This project uses custom CSS for styling.


## Routing
This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.

## Data Fetching

I use TanStack Query to fetch data from a server. But I also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

## See Credits page inside this app for more information.
