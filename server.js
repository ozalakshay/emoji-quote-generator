const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Sample data
const emojis = [
  '😊', '🌟', '💫', '🎯', '🚀', '💪', '🌈', '☀️', '🎉', '💝',
  '🔥', '⚡', '🎨', '🌸', '🦋', '🌺', '🍀', '🎪', '🎭', '🎵',
  '🌙', '⭐', '🌊', '🏆', '💎', '🎈', '🎀', '🌻', '🦄', '🎂'
];

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "You learn more from failure than from success. Don't let it stop you. - Unknown",
  "If you are working on something that you really care about, you don't have to be pushed. - Steve Jobs",
  "Dream big and dare to fail. - Norman Vaughan",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
  "When you have a dream, you've got to grab it and never let go. - Carol Burnett",
  "Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn",
  "There is nothing impossible to they who will try. - Alexander the Great",
  "The bad news is time flies. The good news is you're the pilot. - Michael Altshuler",
  "Life has got all those twists and turns. You've got to hold on tight and off you go. - Nicole Kidman",
  "Keep your face always toward the sunshine, and shadows will fall behind you. - Walt Whitman"
];

// API Routes
app.get('/api/random', (req, res) => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  res.json({
    emoji: randomEmoji,
    quote: randomQuote,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/multiple/:count', (req, res) => {
  const count = Math.min(parseInt(req.params.count) || 1, 10);
  const results = [];
  
  for (let i = 0; i < count; i++) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    results.push({
      emoji: randomEmoji,
      quote: randomQuote,
      id: i + 1
    });
  }
  
  res.json(results);
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📱 Open your browser and visit the URL above`);
});
