# .dev - Building On-Demand Apps with AI as a Community

Welcome to the .dev project repository! This project aims to create a vibrant community-driven platform for building on-demand applications using AI technologies.

## 🚀 About the Project

.dev is a revolutionary platform that brings together developers, AI enthusiasts, and innovators to collaborate on creating cutting-edge, on-demand applications. Our mission is to harness the power of artificial intelligence and community-driven development to solve real-world problems.

## 🎨 Design Philosophy

Our design philosophy revolves around a sleek, modern aesthetic that emphasizes readability and user engagement. We use a carefully curated color palette:

- Primary background: Black
- Text: White
- Accents: Green (#6ee7b7) and Blue (#93c5fd)

This color scheme creates a futuristic and tech-oriented feel, perfect for our AI-focused community.

## 🛠️ Getting Started

To get started with the .dev project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/dotdev-project.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🌟 Key Features

- **Community-Driven Development**: Collaborate with developers worldwide on exciting AI projects.
- **On-Demand App Creation**: Build and deploy AI-powered applications quickly and efficiently.
- **Learning Resources**: Access a wealth of educational content about AI and app development.
- **Project Showcase**: Display your creations and get feedback from the community.

## 🎨 Button Styles

We've implemented a set of custom button styles to maintain consistency across the application. These styles are defined in `src/index.css` and can be easily applied to any button element.

### Available Button Styles

1. `btn-green-outline`: Transparent background with green text and border
2. `btn-green-solid`: Solid green background with black text
3. `btn-green-transparent`: Transparent background with green text, no border
4. `btn-blue-outline`: Transparent background with blue text and border
5. `btn-blue-solid`: Solid blue background with black text
6. `btn-blue-transparent`: Transparent background with blue text, no border

### How to Use

To apply these styles, simply add the appropriate class to your button element:

```jsx
<button className="btn-green-outline">Green Outline Button</button>
<button className="btn-blue-solid">Blue Solid Button</button>
```

### Customizing Styles

You can override or extend these styles by adding additional classes:

```jsx
<button className="btn-green-outline hover:bg-purple-500 hover:text-white">
  Custom Hover
</button>
```

For more examples, check the `src/pages/FreeApps.js` file.

## 📝 Input Styles

We've also implemented a set of custom input styles to maintain consistency across the application. These styles are defined in `src/index.css` and can be easily applied to any input element.

### Available Input Styles

1. `input-default`: Dark gray background with white text
2. `input-green-outline`: Transparent background with green border and text
3. `input-green-solid`: Solid green background with black text
4. `input-blue-outline`: Transparent background with blue border and text
5. `input-blue-solid`: Solid blue background with black text

### How to Use

To apply these styles, simply add the appropriate class to your input element:

```jsx
<input type="text" className="input-default" placeholder="Default input" />
<input type="email" className="input-green-outline" placeholder="Green outline input" />
<input type="password" className="input-blue-solid" placeholder="Blue solid input" />
```

### Customizing Styles

You can override or extend these styles by adding additional classes:

```jsx
<input
  type="text"
  className="input-green-outline focus:ring-2 focus:ring-purple-500"
  placeholder="Custom focus"
/>
```

These input styles are designed to complement our button styles and maintain a consistent look and feel across the application.

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact

For any questions or suggestions, please reach out to us at contact@dotdev.dev or join our community chat on [Discord](https://discord.gg/dotdev).

Join us in shaping the future of AI-driven application development!
