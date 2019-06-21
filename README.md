# ReactNative New York Times Most Popular Post App

New York Times - Most Popular Post app for iOS and Android build with ReactNative and Expo

## Getting Started
### 1. Clone and Install
Use the [yarn](https://yarnpkg.com/en/) package manager to install.

```bash
# clone the repo
git clone https://github.com/saamalam/ReactNative-NYT-App.git

# Install dependencies
yarn install

# Edit config.js file from root and put your New York Times Developer API
```
### 2. Run Development Server
We are using [Expo](https://yarnpkg.com/en/) A free and open source toolchain built around React Native to help you build native iOS and Android apps using JavaScript and React.

```bash
# Install Expo CLI
yarn global add expo-cli
```

```bash
# Run Expo for web
yarn run start
```
Run this command to start the development server and to start your app on iOS simulator:

```bash
# Run Expo for ios
yarn run ios
```
Or, if you prefer Android:

```bash
# Run Expo for android
yarn run android
```
That's it! Cool Right?

### 3. Build App for Specific Devices

```bash
# build for android
expo build: android

#build for ios
expo build: ios
```

### 4. Usage

You need to install [Expo](https://yarnpkg.com/en/) client on your phone to test the app. Just scan the QR code on the expo app to test it.

### 5. Testing with Jest
[Jest](https://jestjs.io/en/) is a delightful JavaScript Testing Framework with a focus on simplicity.

```bash
# run Jest
yarn run test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
