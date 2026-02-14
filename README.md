# Holi Festival Website

A single-page React application for a Holi color festival event, built with Vite, React, and Bootstrap.

## Features

- **Video Background Hero Section** - Full-screen video background with overlay
- **Event Information** - Date and location display
- **Gallery** - Venue photos and past events showcase
- **Booking Section** - Direct link to BookMyShow for ticket booking
- **Contact Section** - Contact details, location, and social media links
- **Responsive Design** - Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
holi-festival-website/
├── public/
│   ├── videos/
│   │   └── holi-video.mp4 (add your video here)
│   └── images/
│       └── gallery/ (add venue and past event photos here)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── EventInfo.jsx
│   │   ├── Gallery.jsx
│   │   ├── BookingSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── SocialLinks.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Customization

### Adding Your Video

1. Place your Holi festival video in `public/videos/holi-video.mp4`
2. The video should be in MP4 format for best browser compatibility
3. If the video doesn't load, a gradient fallback will be displayed

### Adding Images

1. Add venue photos to `public/images/gallery/` as:
   - `venue1.jpg`
   - `venue2.jpg`
   - `venue3.jpg`

2. Add past event photos as:
   - `past1.jpg`
   - `past2.jpg`
   - `past3.jpg`
   - `past4.jpg`
   - `past5.jpg`
   - `past6.jpg`

### Updating Content

Edit the following files to update content:

- **Event Date & Location**: `src/components/EventInfo.jsx`
- **Contact Information**: `src/components/ContactSection.jsx`
- **BookMyShow Link**: `src/components/BookingSection.jsx` and `src/components/Header.jsx`
- **Social Media Links**: `src/components/SocialLinks.jsx`

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Bootstrap 5** - CSS framework
- **Framer Motion** - Animation library
- **Font Awesome** - Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.
