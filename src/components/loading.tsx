export const LoadingDots = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-white animate-bounce" />
        <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]" />
        <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]" />
      </div>
    </div>
  )
}
