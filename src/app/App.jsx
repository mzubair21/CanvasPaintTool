function App({ children }) {
  return (
    <div
      className={` overflow-hidden bg-black text-dark-gray min-h-screen main-section antialiased relative font-inter text-sm font-normal`}
    >
      {children}
    </div>
  )
}

export default App
