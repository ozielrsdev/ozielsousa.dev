export const Footer = () => {
  return (
    <footer className="text-white text-center md:relative">
      <div className="relative w-full h-20">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="md:absolute inset-0 w-full h-full"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-slate-800"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-nowrap">&copy; 2024 Oziel Sousa</p>
        </div>
      </div>
    </footer>
  )
}
