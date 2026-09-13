# 🐱 Typing Cat

An interactive cat game where your keyboard makes the cat jump and move!

## Features

- **Interactive Cat**: The cat jumps and moves with each keystroke
- **Visual Feedback**: Watch the cat's tail wag and see it bounce around
- **Key Counter**: Keep track of how many keys you've pressed
- **Last Key Display**: See which key was pressed most recently
- **Cute Animation**: The cat has expressive eyes, ears, and a wagging tail

## How to Play

1. Open `index.html` in your web browser
2. Start typing on your keyboard
3. Watch the cat jump and move with each keystroke!
4. The cat will randomly move left and right, and tilt as it jumps

## Features

- 🐱 Adorable CSS-drawn cat with expressive features
- ⌨️ Real-time keyboard detection
- 🎨 Beautiful gradient background
- 📊 Key press counter
- 🎯 Random movement and rotation on each keystroke

## Technical Stack

- **HTML5**: Semantic structure
- **CSS3**: Animations, gradients, and styling
- **Vanilla JavaScript**: Event handling and DOM manipulation

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Keyboard event handling and cat logic

## How It Works

1. The game listens for `keydown` events on the entire document
2. Each keystroke triggers a jump animation
3. The cat moves randomly left and right
4. The cat tilts slightly for extra personality
5. A counter tracks total keystrokes
6. The last key pressed is displayed below the counter

## Customization

You can easily customize:
- **Cat Color**: Change `#FF9F43` in `styles.css` to a different color
- **Jump Height**: Modify the `bottom` values in the `@keyframes jump` animation
- **Movement Range**: Adjust the `200` in the random movement calculation in `script.js`
- **Animation Speed**: Change the `0.4s` timing in animations

## Browser Compatibility

Works in all modern browsers that support:
- CSS Animations
- CSS Gradients
- ES6 JavaScript

## Have Fun! 🎮

Start typing and watch your cat go crazy! 🐱✨
