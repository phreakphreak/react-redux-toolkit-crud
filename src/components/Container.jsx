function Container({ children }) {
  return (
    <div className="flex flex-row flex-wrap w-screen h-screen text-white bg-slate-900">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
export default Container;
