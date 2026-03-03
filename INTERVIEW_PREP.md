# Interview Preparation - React E-commerce Project

## Project Overview
This is a **Sleepy Owl Protein Coffee** e-commerce product page built with **React 19 + Vite**. It features product showcase, variant selection, reviews, FAQ, and a complete shopping experience.

---

## KEY TOPICS TO REVIEW

### 1. React Fundamentals
- **useState**: Used in App.jsx (cartCount, selectedVariant), VariantSelector.jsx (selected), FAQ.jsx (openIndex), ReviewCard.jsx (vote), Hero.jsx (currentImage), ReviewsSection.jsx (showFilters)
- **useEffect**: Used in Hero.jsx to sync carousel with variant selection
- **Props**: Parent-to-child communication (onVariantChange callback)
- **Component Architecture**: Modular components with separate CSS files

### 2. Component Structure
```
App.jsx (Main Container)
├── Navbar
├── Hero (Carousel with props.selectedIndex)
├── ProductDetails (StarRating sub-component)
├── VariantSelector (has onVariantChange prop)
├── PromoCard
├── ProteinBanner
├── NutritionStats
├── FlavorSection
├── FAQ (FAQItem sub-component)
├── RelatedProducts
├── ReviewsSection (ReviewCard sub-component)
└── Footer
```

### 3. Key Code Patterns

**State Management (App.jsx):**
```jsx
const [cartCount, setCartCount] = useState(0);
const [selectedVariant, setSelectedVariant] = useState(0);

const handleAddToCart = () => setCartCount(c => c + 1);
const handleVariantChange = (idx) => setSelectedVariant(idx);
```

**Callback Props (VariantSelector.jsx):**
```jsx
const handleSelect = (idx) => {
    setSelected(idx);
    onVariantChange && onVariantChange(idx);  // Callback pattern
};
```

**useEffect for Sync (Hero.jsx):**
```jsx
useEffect(() => {
    setCurrentImage(selectedIndex);  // Sync when parent state changes
}, [selectedIndex]);
```

**Conditional Rendering (VariantSelector.jsx):**
```jsx
{v.bestseller && selected === idx && (
    <div className="bestseller-badge">BESTSELLER</div>
)}
```

**Array Mapping:**
```jsx
{assets.variants.map((v, idx) => (
    <div key={idx} className={`variant-card ${selected === idx ? 'selected' : ''}`}>
```

---

## LIKELY INTERVIEW QUESTIONS & ANSWERS

### Q1: Explain the state management in this app
**Answer:** 
- Uses React's built-in `useState` hook for local component state
- `cartCount` and `selectedVariant` are lifted to App.jsx (Lifted State)
- State flows down via props; updates flow up via callback functions
- No external state management (Redux/Context) needed for this scale

### Q2: How does variant selection affect the Hero component?
**Answer:**
1. User clicks variant in VariantSelector
2. `handleVariantChange(idx)` is called in App.jsx
3. `selectedVariant` state updates to idx
4. App passes `selectedIndex={selectedVariant}` to Hero
5. Hero's `useEffect` detects change and updates `currentImage`

### Q3: What improvements would you suggest?
**Possible Answers:**
1. Add form validation for reviews
2. Implement proper cart functionality (not just counter)
3. Add loading states/skeletons
4. Implement accessibility improvements (aria-labels)
5. Add error boundaries
6. Consider React.memo for performance optimization
7. Add proper TypeScript types

### Q4: How would you add a new feature - "Add to Wishlist"?
**Answer:**
1. Add `wishlistCount` state in App.jsx
2. Create wishlist icon in Navbar
3. Pass `onAddToWishlist` callback down to components
4. Use localStorage to persist wishlist

### Q5: What's the purpose of `key` in mapped elements?
**Answer:** 
- Helps React identify which items have changed, been added, or removed
- Should be a unique identifier (not index if list can reorder)
- Example: `key={idx}` works here because variant order is fixed

---

## POTENTIAL MODIFICATION TASKS

Be ready for these minor modification requests:

1. **Add discount badge**: Add a "20% OFF" badge to the purchase button
2. **Change color scheme**: Update CSS variables for brand colors
3. **Add new variant**: Add "Chocolate" variant to assets.js
4. **Disable add to cart when out of stock**: Add `inStock` property to variants
5. **Add review sorting**: Already has sort dropdown - could add actual sorting logic
6. **Accordion single-open behavior**: FAQ already has single-open (using openIndex)

---

## Technical Stack
- **React 19** with functional components
- **Vite** for build tooling
- **CSS Modules** (component-scoped styles)
- **No external state management** (simple app)
- **No routing** (single page)

---

## Quick Reference - File Purposes

| File | Purpose |
|------|---------|
| src/App.jsx | Main container, state management |
| src/assets.js | Centralized asset imports |
| src/components/VariantSelector.jsx | Product variant selection |
| src/components/Hero.jsx | Image carousel |
| src/components/ProductDetails.jsx | Product info, features |
| src/components/ReviewsSection.jsx | Reviews with filters |
| src/components/FAQ.jsx | Accordion FAQ |
| src/components/ReviewCard.jsx | Individual review display |

---

## READY FOR INTERVIEW ✓

Key points to remember:
1. **Explain NOT just use** - Say WHY you chose this approach
2. **Know the data flow** - How props and callbacks work
3. **Understand React concepts** - State, effects, conditional rendering
4. **Be ready for modifications** - Small CSS/JS changes
5. **Know best practices** - Key props, component separation, etc.

