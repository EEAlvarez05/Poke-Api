function Loader({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
        <div className="loader"></div>
    </div>
  )
}

export default Loader;
