# RN start kit

# Stack

- **Typescript**
- **Flipper Ready**
- **Navigation System**
  - [React Navigation 6](https://reactnavigation.org/blog/2021/08/14/react-navigation-6.0/)
  - [React Navigation Helpers](https://github.com/WrathChaos/react-navigation-helpers)
  - Ready to use Stack and Tab Screens with navigation
- **NEW: Built-in Theme System with Hooks**
  - Switch theme
  - Dynamic Color Palette System
  - Custom Font Support
  - Built-in Better `Text` Component
- **Ready to use [React Native Reanimated 2](https://docs.swmansion.com/react-native-reanimated/) Integration**
- **Native Splash Screen Integration**
  - [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen)
- **Awesome [React Native Helpers](https://github.com/WrathChaos/react-native-helpers) Integration**
  - Noth Detection Support
  - Better Dimension Helper (Ex: ScreenWidth, ScreenHeight)
  - Cool Text Helpers
- **React Native Vector Icons**
  - [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
  - [React Native Dynamic Vector Icons](https://github.com/WrathChaos/react-native-dynamic-vector-icons)
- **[Localization](https://github.com/stefalda/ReactNativeLocalization) (Multi-Language Support)**
- **HTTP Network Management**
  - [Axios](https://github.com/axios/axios)
  - [Axios Hooks](https://github.com/simoneb/axios-hooks)
  - API Service with Usage Examples
- **Built-in EventEmitter**
  - [EventBus](https://github.com/browserify/events#readme)
- **Babel Plugin Module Resolver**
  - Fixing the relative path problem
  - Visit `.babelrc` to ready to use and more customization
- **Pre-commit Husky Integration**
  - Ready to command husky setup with `npm run husky:setup`
  - `commitlint` Integration for better commit linter
  - Auto prettier on pre-commit
  - Awesome ESLint Integration
- **Built-in Custom Font Implementation**
  - All you need to do is copy-paste the .tff files into `assets/fonts` folder
  - Run `npx react-native-asset` command
- **Better Eslint and Prettier**
  - Auto import order dependency
  - Battle proof linting and prettier rules
  - Ready to use `.eslintrc.js` and `.prettierrc.js`
- **`PrivacyInfo.xcprivacy` added for iOS**

- **More and more! :)**

# Step By Step Guide

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

- `npm i`
- `npx pod-install` (iOS Only)
- `react-native run-ios/android`

### Install Pods (iOS Only)

- `npm i`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `npm i`
- `cd android && mkdir local.properties`
- `nano local.properties`

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android **SDK**

##### MacOS / Linux

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

##### Windows

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

- `cd .. & react-native run-ios/android`

# 📃 Documentations

- [Components](./docs/components.md)
- [Axios Hooks](./docs/axios-hooks.md)
- [Event Emitter Usage](./docs/event-emitter.md)
- [Project Structure](./docs/project-structure.md)
