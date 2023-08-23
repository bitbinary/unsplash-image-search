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

Install the dependencies by running

```bash
npm ci  (install based on package.lock)

or

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
