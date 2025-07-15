# Sun Grain Loader Components

Beautiful sun and grain themed loaders for your website. These components are designed to match the SUN GRAIN branding with smooth animations and responsive design.

## Components

### 1. SunGrainLoader

A versatile loader with rotating sun and falling grain animations.

```tsx
import { SunGrainLoader } from "../../shared/ui/loader";

// Basic usage
<SunGrainLoader />

// With different sizes
<SunGrainLoader size="small" />
<SunGrainLoader size="medium" />
<SunGrainLoader size="large" />

// With custom text
<SunGrainLoader text="Loading products..." />

// Without text
<SunGrainLoader showText={false} />
```

**Props:**

- `size?: "small" | "medium" | "large"` - Controls the size of the loader
- `showText?: boolean` - Whether to show loading text (default: true)
- `text?: string` - Custom loading text (default: "Loading...")
- `className?: string` - Additional CSS classes

### 2. FullscreenLoader

A fullscreen overlay loader perfect for page transitions or major loading states.

```tsx
import { FullscreenLoader } from "../../shared/ui/loader";

// Basic usage
<FullscreenLoader isVisible={loading} />

// With custom text
<FullscreenLoader
  isVisible={loading}
  text="Loading SUN GRAIN..."
/>
```

### 3. PageStartupLoader

A hardcoded startup loader that automatically displays when the page loads and disappears when loading is complete.

```tsx
import { PageStartupLoader } from "../../shared/ui/loader";

// Basic usage (automatic)
<PageStartupLoader />

// With custom duration
<PageStartupLoader duration={3000} />

// With callback
<PageStartupLoader onComplete={() => console.log("Page loaded!")} />
```

**Props:**

- `duration?: number` - Maximum loading duration in milliseconds (default: 2000)
- `minDisplayTime?: number` - Minimum display time in milliseconds (default: 1000)
- `onComplete?: () => void` - Callback when loading is complete

**Features:**

- Automatic progress simulation
- Responsive design
- Smooth fade-out animation
- Progress ring with percentage
- Dynamic loading messages
- Animated grain particles background
- Waits for actual page load completion

### 4. Astro Startup Loader

For Astro projects, use the `startup-loader.astro` component which provides a native, hardcoded implementation that works immediately when the page loads.

```astro
---
import StartupLoader from "../../shared/ui/loader/startup-loader.astro";
---

<StartupLoader />
```

This component is automatically included in the main layout and provides:

- Immediate loading display
- No JavaScript dependencies
- Smooth progress animation
- Automatic completion detection
- Responsive design

**Props:**

- `isVisible?: boolean` - Controls visibility (default: true)
- `text?: string` - Custom loading text (default: "Loading...")
- `className?: string` - Additional CSS classes

### 3. ButtonLoader

A small spinning sun loader perfect for buttons and inline loading states.

```tsx
import { ButtonLoader } from "../../shared/ui/loader";

// Basic usage
<ButtonLoader />

// With custom color and size
<ButtonLoader size={20} color="#F38810" />

// In a button
<button disabled={loading}>
  {loading ? (
    <div className="flex items-center gap-2">
      <ButtonLoader size={16} color="#F38810" />
      <span>Loading...</span>
    </div>
  ) : (
    'Submit'
  )}
</button>
```

**Props:**

- `size?: number` - Size of the loader in pixels (default: 16)
- `color?: string` - Color of the loader (default: "#ffffff")
- `className?: string` - Additional CSS classes

## Icons

### SunIcon

A customizable sun icon with rays.

```tsx
import { SunIcon } from "../../shared/icons/sun-icon";

<SunIcon size={48} color="#F38810" />;
```

### GrainFallIcon

An icon representing falling grain particles.

```tsx
import { GrainFallIcon } from "../../shared/icons/grain-fall-icon";

<GrainFallIcon size={48} color="#F38810" />;
```

## Animations

The loaders use custom CSS animations defined in both `global.css` and `tailwind.config.mjs`:

- `animate-spin-slow` - Slow 3-second rotation
- `animate-grain-fall` - Falling grain animation with rotation
- `animate-grain-bounce` - Bouncing grain animation

## Usage Examples

### In a Contact Form

```tsx
import { ButtonLoader } from "../../shared/ui/loader";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <button type="submit" disabled={loading}>
      {loading ? (
        <div className="flex items-center gap-2">
          <ButtonLoader size={16} color="#F38810" />
          <span>Sending...</span>
        </div>
      ) : (
        "Send Message"
      )}
    </button>
  );
};
```

### For Page Loading

```tsx
import { FullscreenLoader } from "../../shared/ui/loader";

const App = () => {
  const [pageLoading, setPageLoading] = useState(true);

  return (
    <>
      <FullscreenLoader isVisible={pageLoading} text="Loading SUN GRAIN..." />
      {/* Your page content */}
    </>
  );
};
```

### In Data Tables or Lists

```tsx
import { SunGrainLoader } from "../../shared/ui/loader";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <SunGrainLoader size="medium" text="Loading products..." />
      </div>
    );
  }

  return (
    // Your product list
  );
};
```

## Styling

All loaders are built with Tailwind CSS and use the project's color palette:

- Primary: `#F38810` (Orange)
- Secondary: `#223137` (Dark Gray)
- Tertiary: `#D25127` (Red)

The components are fully responsive and will work well on all screen sizes.

## Demo

Run the `LoaderDemo` component to see all loaders in action:

```tsx
import { LoaderDemo } from "../../shared/ui/loader";

<LoaderDemo />;
```

This will show all different loader variations and sizes.
