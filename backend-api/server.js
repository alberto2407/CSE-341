const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

// Datos de prueba
const professionalData = {
  professionalName: "Alberto Flores",
  base64Image: "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAA5klEQVR4nO3QQQkAIADAQLV/Z63gXiLcJRibe3BrvQ74iVmBWYFZ...",
  nameLink: {
    firstName: "Alberto",
    url: "https://github.com/alberto2407"
  },
  primaryDescription: "Web developer passionate about modern design.",
  workDescription1: "Learning full-stack development with a focus on frontend",
  workDescription2: "Passionate about the aesthetics and functionality of code.",
  linkTitleText: "Find me on social media:",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/albertofc2000/"
  },
  githubLink: {
    text: "GitHub",
    link: "https://github.com/alberto2407"
  }
};

// Main Endpoint
app.get('/professional', (req, res) => {
  res.json(professionalData);
});

app.listen(PORT, () => {
  console.log(`Web Server is listening at port http://localhost:${PORT}`);
});
