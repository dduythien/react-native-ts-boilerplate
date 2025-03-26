# 🍺 Project Structure

## File structure

`index.js` is the entry-point for our file, and is mandatory.
`App.tsx` is the main-point for our application.

- `/android` - contains native code specific to the Android OS
- `/ios` - native code specific to iOS
- `/docs` - as the name suggests - any docs
- `/src` - contains our JS and style code.
  - `/navigation` - define routers
  - `/screens` - contains all screens/pages
  - `/services` - app-wide services
    - `/api` - generic network handling with API constants
    - `/event-emitter` - singleton event bus to use it everywhere in the project
  - `/shared` - whole app-wide shared
    - `/components` - app-wide shared components
    - `/constants` - app-wide shared constant variables
    - `/localization` - app-wide localization
    - `/theme` - app-wide theme which contains `color palette` and `fonts`
  - `/stores` - redux state management
  - `/utils` - generic util functions
  - `index.js` - the starting place for our app
  - `App.tsx` - the main place for our app

## Project Structure on Flat Design

```
├───android
├───ios
├───src
│   ├───navigation
│   │   └───index.tsx
│   ├───screens
│   │   ├───detail
│   │   │   ├───DetailScreen.style.ts
│   │   │   └───DetailScreen.tsx
│   │   ├───home
│   │   │   ├───HomeScreen.style.ts
│   │   │   └───HomeScreen.tsx
│   │   ├───notification
│   │   │   ├───NotificationScreen.style.ts
│   │   │   └───NotificationScreen.tsx
│   │   ├───profile
│   │   │   ├───ProfileScreen.style.ts
│   │   │   └───ProfileScreen.tsx
│   │   └───search
│   │       ├───SearchScreen.style.ts
│   │       └───SearchScreen.tsx
│   ├───services
│   │   ├───api
│   │   │   ├───auth.ts
│   │   │   ├───dashboard.ts
│   │   │   └───index.ts
│   │   └───event-emitter
│   │       └───index.ts
│   ├───shared
│   │   ├───components
│   │   │   ├───Button
│   │   │   ├───Tag
│   │   │   └───text-wrapper
│   │   ├───constants
│   │   │   └───index.ts
│   │   ├───localization
│   │   │   └───index.ts
│   │   └───theme
│   │       ├───fonts.ts
│   │       └───themes.ts
│   ├───stores
│   │   ├───actions
│   │   │   ├───auth.ts
│   │   │   ├───si.ts
│   │   │   └───eapp.ts
│   │   ├───...
│   │   ├───hooks.ts
│   │   └───rootReducers.ts
│   └───utils
│       └───index.ts
├───.babelrc
├───.commitlintrc.json
├───.eslintignore
├───.eslintrc.js
├───.gitattributes
├───.gitignore
├───.npmignore
├───.prettierignore
├───.prettierrc
├───.watchmanconfig
├───app.json
├───App.tsx
├───global.d.ts
├───index.js
├───metro.config.js
├───package-lock.json
├───package.json
├───react-native.config.js
├───README.md
├───tsconfig.json
```
