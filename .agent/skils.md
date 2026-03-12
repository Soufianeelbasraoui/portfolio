---
description: Image Design System and Function Helpers
---

# Image Design System & Function Helpers

This skill defines the design system for images within the portfolio project and provides React function helpers to maintain visual consistency.

## 🎨 Image Generation Guidelines

When using AI tools (like `generate_image`) to create project thumbnails or assets, strictly adhere to these visual rules to match the existing premium design:

- **Composition**: Centered device mockups (mobile or desktop).
- **Backgrounds**: Clean, solid pastel colors or smooth dark gradients (e.g., muted green, soft pink, deep blue) that make the UI pop.
- **Style**: Modern, flat, minimalist UI design. No realistic environments, desks, or hands.
- **Aesthetic**: Premium, glassmorphism elements where applicable, sharp and clean edges.

---

## 💻 React Function Helpers

Below are reusable React functional components (function helpers) to render images consistently according to the design system. You can copy these into your project (e.g., `src/components/images/`).

### 1. `ProjectThumbnail`

Used for displaying application mockups in the "My Projects" section.

```jsx
import React from "react";

export const ProjectThumbnail = ({ src, alt, badgeText }) => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px 12px 0 0",
        backgroundColor: "#f3f4f6",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          display: "block",
        }}
      />
      {badgeText && (
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "4px 12px",
            borderRadius: "16px",
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}
        >
          {badgeText}
        </span>
      )}
    </div>
  );
};
```

### 2. `ProfileAvatar`

Used for the main profile picture (the large circular image).

```jsx
import React from "react";

export const ProfileAvatar = ({ src, alt, size = "280px" }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#E5E7EB", // matching the placeholder gray
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span style={{ color: "#9CA3AF", fontSize: "1.5rem" }}>No Image</span>
      )}
    </div>
  );
};
```

### 3. `IconCircle`

Used for the timeline icons and sidebar navigation icons.

```jsx
import React from "react";

export const IconCircle = ({ icon, isActive }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: isActive ? "#FF8C00" : "#E5E7EB", // Orange for active, Gray for inactive
        color: isActive ? "#FFFFFF" : "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.25rem",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: isActive ? "0 4px 14px rgba(255, 140, 0, 0.4)" : "none",
      }}
    >
      {icon}
    </div>
  );
};
```

## 🛠️ CSS Utility Classes Reference

If you prefer pure CSS over inline styles, ensure your `index.css` or Tailwind config supports:

- **Colors**: Primary Orange (`#FF8C00` or `#F97316`), Light Gray (`#E5E7EB`).
- **Radii**: `border-radius: 50%` for avatars/icons, `border-radius: 12px` for project cards.
- **Shadows**: Soft drop shadows `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)` for cards, and colored glowing shadows for primary buttons.
