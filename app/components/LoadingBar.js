export default function LoadingBar() {
  return (
    <div className="relative h-[2px] w-[300px] overflow-hidden bg-[rgb(146,154,171)]">
      <div className="absolute inset-0 bg-[linear-gradient(87deg,_rgb(247,247,247)_0%,_rgba(57,62,70,0.14)_30%,_rgba(57,62,70,0.14)_70%,_rgb(247,247,247)_100%)]" />
      <div className="absolute top-0 left-[-20%] h-full w-[70px] bg-[linear-gradient(87deg,_rgba(238,238,238,0)_0%,_rgb(238,238,238)_40%,_rgb(238,238,238)_60%,_rgba(238,238,238,0)_100%)] animate-light" />
    </div>
  );
}
