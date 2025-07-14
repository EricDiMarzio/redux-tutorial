# Creating a Redux Application (Vanilla Redux - No RTK)

A complete guide to setting up Redux from scratch with React, demonstrating core Redux principles and unidirectional data flow.

## 📦 1. Install Dependencies

### Required Packages

```bash
npm install redux react-redux
```

### What Each Package Does

| Package | Purpose | Key Exports |
|---------|---------|-------------|
| **redux** | Core Redux library | `createStore`, `combineReducers` |
| **react-redux** | React bindings for Redux | `Provider`, `useSelector`, `useDispatch` |

---

## 📁 2. File Structure

Create the following folder structure in your `src` directory:

```
src/
├── State/
│   ├── Reducers/
│   │   ├── counterReducer.js
│   │   └── index.js
│   ├── actions.js
│   ├── actionTypes.js
│   └── store.js
├── main.js (or index.js)
└── App.js
```

---

## 🔧 3. Implementation

Complete each file in the following order:

     1: `actionTypes.js`
     2: `actions.js`
     3: `Reducers/counterReducer.js`
     4: `Reducers/index.js`
     5: `store.js`


---

## 🔗 4. Connect to React Application

    1: `main.js` (App Entry Point)
    2: `App.js`

---

## 🔄 Data Flow Demonstration

Understanding how data flows through Redux:

```
1. User clicks "Increment" button
   ↓
2. handleIncrement() calls dispatch(increment())
   ↓
3. increment() action creator returns { type: 'INCREMENT' }
   ↓
4. Store receives action and passes it to rootReducer
   ↓
5. rootReducer passes action to counterReducer
   ↓
6. counterReducer processes INCREMENT case, returns new state
   ↓
7. Store updates state and notifies all subscribers
   ↓
8. useSelector hook detects change and triggers re-render
   ↓
9. Component re-renders with new count value
```

---

## 🎯 Key Redux Principles

### ✅ **Do's**
- **Pure Reducers:** No side effects, same input = same output
- **Immutable Updates:** Always return new state objects
- **Single Source of Truth:** One store holds entire app state
- **Unidirectional Flow:** Actions → Reducers → State → UI

### ❌ **Don'ts**
- **Don't mutate state** directly in reducers
- **Don't perform side effects** in reducers (API calls, random numbers, etc.)
- **Don't modify action objects** in reducers
- **Don't access state directly** - use `useSelector`

