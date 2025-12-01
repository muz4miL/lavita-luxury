# NavDropdown Component

A premium, reusable navigation dropdown component for the Lavita Malam Jabba luxury resort website. Built with **Headless UI**, **Heroicons**, and **Next.js**.

## ✨ Features

- 🎨 **Premium Design** - Matches Lavita's luxury aesthetic with gold/champagne hover effects
- 🎬 **Silky Animations** - Apple-style slide-up transitions with precise timing curves
- ♿ **Fully Accessible** - Built on Headless UI with proper ARIA attributes
- 📱 **Responsive** - Works seamlessly across all devices
- 🔄 **Rotating Chevron** - Icon rotates 180° when menu opens for polished UX
- 🎯 **Reusable** - Use for any dropdown section (Experiences, The Resort, Amenities, etc.)

## 🎨 Animation Physics

The component implements the following premium animation curves:

- **Enter**: `ease-out duration-200`
  - From: `opacity-0 translate-y-1`
  - To: `opacity-100 translate-y-0`
  
- **Leave**: `ease-in duration-150`
  - From: `opacity-100 translate-y-0`
  - To: `opacity-0 translate-y-1`

This creates the signature "slide up while fading in" effect seen in premium UI designs.

## 📦 Installation

The dependencies are already installed in your project:

```bash
npm install @headlessui/react @heroicons/react
```

## 🚀 Usage

### Basic Example

```jsx
import NavDropdown from './components/layout/NavDropdown';

const experiences = [
  { label: 'Stargazing Observatory', href: '/#stargazing-observatory' },
  { label: 'Jeep Forest Ride', href: '/#jeep-forest-ride' },
  { label: 'Night Skiing', href: '/#night-skiing' },
  { label: 'Wildlife Sanctuary', href: '/#wildlife-sanctuary' },
];

<NavDropdown title="Experiences" items={experiences} />
```

### Full Navbar Implementation

```jsx
'use client';

import NavDropdown from './NavDropdown';
import Link from 'next/link';

export default function Navbar() {
  const resortItems = [
    { label: 'Our Story', href: '/#our-story' },
    { label: 'Vertical Garden', href: '/#vertical-garden' },
    { label: 'Mini Museum', href: '/#mini-museum' },
    { label: 'Gallery', href: '/#gallery' },
  ];

  const experiencesItems = [
    { label: 'Stargazing Observatory', href: '/#stargazing-observatory' },
    { label: 'Jeep Forest Ride', href: '/#jeep-forest-ride' },
    { label: 'Night Skiing', href: '/#night-skiing' },
    { label: 'Wildlife Sanctuary', href: '/#wildlife-sanctuary' },
  ];

  const amenitiesItems = [
    { label: 'Wellness Club', href: '/#wellness-club' },
    { label: 'Panorama Restaurant', href: '/#panorama-restaurant' },
    { label: 'Kids Play Area', href: '/#kids-play-area' },
    { label: 'Swat Traditional Centre', href: '/#swat-traditional' },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-11 ml-auto">
      <Link href="/" className="nav-link">Home</Link>
      
      <NavDropdown title="The Resort" items={resortItems} />
      
      <Link href="/suites" className="nav-link">Suites & Investment</Link>
      
      <NavDropdown title="Experiences" items={experiencesItems} />
      
      <NavDropdown title="Amenities" items={amenitiesItems} />
      
      <Link href="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}
```

## 🎨 Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ Yes | The text displayed on the dropdown trigger |
| `items` | `Array<{label: string, href: string}>` | ✅ Yes | Array of menu items with labels and links |
| `className` | `string` | ❌ No | Additional CSS classes for the container |

## 🎯 Design Decisions

### Why Headless UI?

- **Accessibility Built-in** - Handles focus management, keyboard navigation, and ARIA attributes
- **Unopinionated Styling** - Full control over visual design while handling complex logic
- **React Native** - Built specifically for React/Next.js applications
- **Lightweight** - No unnecessary CSS or JavaScript bloat

### Color Scheme

The component uses Lavita's brand colors:

- **Text (Default)**: `rgba(245, 245, 245, 0.85)` - Soft white
- **Text (Hover/Active)**: `#c89b7b` - Brushed copper/champagne gold
- **Panel Background**: White with subtle shadows
- **Panel Items**: `#2a2a2a` → `#0f2522` on hover (dark gray to midnight pine)
- **Hover Background**: `rgba(200, 155, 123, 0.08)` - Subtle gold tint

### Typography

- **Font Family**: Manrope (sans-serif) for modern, clean readability
- **Font Size**: `0.78rem` for trigger, `0.82rem` for items
- **Letter Spacing**: `0.18em` - Premium, luxury feel
- **Text Transform**: Uppercase for trigger (elegant, resort-style)

## 🎬 Animation Breakdown

1. **Trigger Hover**: Text color smoothly transitions to gold (`duration-300`)
2. **Chevron Rotation**: 180° rotation with `ease-out` timing when panel opens
3. **Panel Entry**: Slides up 4px while fading in (`translate-y-1` → `translate-y-0`)
4. **Panel Exit**: Slides down slightly while fading out
5. **Item Hover**: Background fade + expanding gold line indicator

## 🔧 Customization

### Change Animation Timing

```jsx
// In NavDropdown.jsx, modify the Transition component:
<Transition
  enter="transition ease-out duration-300"  // Slower entrance
  leave="transition ease-in duration-100"   // Faster exit
  // ... rest of props
>
```

### Adjust Panel Position

```jsx
// Change the top offset in the Popover.Panel:
<Popover.Panel className="absolute top-[3rem] left-1/2 -translate-x-1/2 z-50 min-w-[220px]">
```

### Add Icons to Menu Items

```jsx
// Pass icon prop in items array:
const items = [
  { label: 'Our Story', href: '/#our-story', icon: StarIcon },
  // ...
];

// Update NavDropdown to render icons:
<div className="flex items-center gap-3">
  {item.icon && <item.icon className="h-4 w-4" />}
  <p>{item.label}</p>
</div>
```

## ✅ Accessibility Features

- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus management (returns focus on close)
- ✅ Screen reader support (proper ARIA labels)
- ✅ Click-outside-to-close
- ✅ Focus visible states

## 📱 Responsive Behavior

The NavDropdown is designed for **desktop navigation only**. For mobile, continue using your existing drawer menu implementation. The dropdown automatically hides on mobile via the `hidden lg:flex` classes in your navbar.

## 🎨 Visual Hierarchy

1. **Trigger State**: Subtle, integrated with navbar
2. **Hover State**: Gold color signals interactivity
3. **Active State**: Rotated chevron + gold text
4. **Panel**: Clean white, elevated with shadow
5. **Items**: Clear hierarchy with hover feedback

## 🚀 Performance Notes

- Uses `Fragment` to avoid unnecessary DOM nodes
- CSS transforms (not `margin/padding`) for smooth GPU-accelerated animations
- Lazy-renders panel content only when open (Headless UI optimization)
- Minimal re-renders with proper component structure

## 🎓 Learn More

- [Headless UI Popover Docs](https://headlessui.com/react/popover)
- [Heroicons](https://heroicons.com/)
- [Next.js Link Component](https://nextjs.org/docs/app/api-reference/components/link)

---

**Built with ❤️ for Lavita Malam Jabba**
