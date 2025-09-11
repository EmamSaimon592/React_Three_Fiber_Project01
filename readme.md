<p align="center">
  <img src="./ReactThreeFiber01/public/React Three Fiber.png" alt="Cover Image" width="100%" />
</p>

#  React Three Fiber - Rotating Textured Cylinder with Postprocessing Effects

This project is a **3D rotating cylinder** built using [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), showcasing **texture mapping**, **postprocessing effects** (like Bloom and Tone Mapping), and real-time **animation** using the `useFrame` hook.


## Tech Stack

- **React**
- **React Three Fiber**
- **@react-three/drei**
- **@react-three/postprocessing**
- **Three.js**

---

##  Features

- ✅ Rotating 3D cylinder
- ✅ Texture mapping with transparency
- ✅ Bloom and tone mapping visual effects
- ✅ Configurable orbit controls (commented out)
- ✅ Responsive real-time rendering with `useFrame`

---

##  Installation & Usage

```bash
# 1. Clone the repo
git clone https://github.com/EmamSaimon592/React_Three_Fiber_Project01.git

# 2. Navigate to the project directory
cd React_Three_Fiber_Project01

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

```
---

## Acknowledgements
[ React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

[ Drei helpers](https://github.com/pmndrs/drei)

[Postprocessing effects](https://github.com/pmndrs/postprocessing)

---
## Key Components

### App.jsx

    Initializes the canvas

    Applies effects using @react-three/postprocessing

    Renders the <Cyl /> component

    (Optional) Enables OrbitControls for interaction

### Cyl.jsx

    Uses useRef and useFrame for rotation

    Loads texture using useTexture

    Displays a cylinder with 60 segments and double-sided texture

---

# Author
  Emam Saimon

  [GitHub](https://github.com/EmamSaimon592)

  [LinkedIn](in/emam-h-saimon-8328a1382)

---
