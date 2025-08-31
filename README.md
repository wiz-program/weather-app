# React TypeScript Weather App

A modern weather application built with React and TypeScript that displays real-time weather information using the WeatherAPI.com service.

## 🌟 Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Modern UI**: Beautiful, responsive design with glassmorphism effects
- **TypeScript**: Full type safety and better development experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Optimized React components with efficient rendering

## 🚀 Live Demo

**[View Live App](https://wiz-program.github.io/react-typescript-weather-app)**

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **WeatherAPI.com** - Real-time weather data service
- **CSS3** - Modern styling with glassmorphism effects
- **GitHub Pages** - Free hosting and deployment

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/wiz-program/react-typescript-weather-app.git
cd react-typescript-weather-app
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 📱 Usage

1. **Enter a city name** in the input field
2. **Click "Get Weather"** or press Enter
3. **View the weather information** including:
   - City and country name
   - Current temperature in Celsius
   - Weather condition with icon
   - Real-time updates

## 🚀 Deployment

This project is configured for automatic GitHub Pages deployment.

### Deploy to GitHub Pages

1. **Update the homepage field** in `package.json` with your GitHub username:
```json
"homepage": "https://wiz-program.github.io/react-typescript-weather-app"
```

2. **Deploy the app**:
```bash
npm run deploy
```

3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose the `gh-pages` branch
   - Save the settings

Your app will be available at: `https://wiz-program.github.io/react-typescript-weather-app`

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App
- `npm run deploy` - Deploys the app to GitHub Pages

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
REACT_APP_WEATHER_API_KEY=your_weather_api_key_here
```

### API Configuration

This app uses [WeatherAPI.com](https://www.weatherapi.com/) for weather data. You'll need to:

1. Sign up for a free account at WeatherAPI.com
2. Get your API key
3. Add it to your environment variables

## 🐛 Troubleshooting

### Common Issues

1. **White screen on GitHub Pages**:
   - Check if the `homepage` field in `package.json` is correct
   - Ensure the `gh-pages` branch exists
   - Wait a few minutes for the deployment to complete

2. **API errors**:
   - Verify your API key is correct
   - Check your API usage limits
   - Ensure the city name is valid

3. **Build errors**:
   - Clear the `node_modules` folder and reinstall dependencies
   - Check for TypeScript compilation errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the [troubleshooting section](#-troubleshooting)
2. Search existing [issues](https://github.com/wiz-program/react-typescript-weather-app/issues)
3. Create a new issue with detailed information

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing weather data
- [Create React App](https://create-react-app.dev/) for the project setup
- [React](https://reactjs.org/) team for the amazing framework

---

**Made with ❤️ by [wiz-program](https://github.com/wiz-program)**
