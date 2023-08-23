# Unsplash Image Search

This is a sample app to search for images using the Unsplash Api using Typescript, and React with NextJs, useSWR, and MUI.

> Details of the api used can be found here: <https://unsplash.com/documentation#search-photos>

## Getting Started

### environment set-up

you need :

- node 14.18.0 or higher with npm - (required)
- git - (optional)

## Setting up

Once the git repo is cloned / downloaded, navigate to the folder

### Dependencies

Install the dependencies by running:

```bash
npm ci
```

note: `npm ci` installs the dependency based on the package.lock to ensure no unwanted package version changes occur
or

```bash
npm i

```

### Environment variables

Create a new file called `env.local` for the local environment. Add the following environment variables with values`copy of the template can be found in`.env.template` file

> To generate the unsplash api key follow the guide here: <https://unsplash.com/documentation#creating-a-developer-account>

```text
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=<value>
UNSPLASH_SECRET_KEY=<value>
NEXT_PUBLIC_UNSPLASH_BASE_URL=https://api.unsplash.com
NEXT_PUBLIC_UNSPLASH_PHOTO_SEARCH_URL=search/photos
```

### Running in local

Open the terminal to the root folder and run the command

```bash
npm run dev
```

Hurray, your local development server should be running now.

## Future Scopes

1. The current usage of the API exposes Unsplash API Key. It is better to have a server handle the request to the api and the user request to the server should be validated for more security. So user authentication would be a good idea.
2. Improve the usage of theme library for branding and theming, currently it is only used for layout and some components. It can improve code maintainability and scalability.
3. The response time and wait time can be reduced by prefetching some data. Improve prefetching and caching without affecting the browser performance
4. Added features to use full capability of the api by extending the app capability to query with `order_by`, `collections`, `content_filter`, `color`, `orientation`
5. Review user UX preferences like pagination against infinite scroll, number of grids
6. Make sure it passes accessibility compliances
7. Since the API is using unsplash images, there are terms and condition for usage in production. The correct attribution are to be provided and the terms and conditions are to be met before release.
8. Add test suits to test the component functionality and and app functionality
9. Include ci-cd process to deploy the app for each environment
10. Branch out the main github branch for each environment.
