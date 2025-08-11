export default function LoadingBar() {
  return (
    <div className="relative h-[2px] w-[300px] overflow-hidden bg-[#404559]">
      <div className="absolute inset-0 bg-[linear-gradient(87deg,_rgb(51,53,68)_0%,_rgba(255,255,255,0.14)_30%,_rgba(255,255,255,0.14)_70%,_rgb(51,53,68)_100%)]" />
      <div className="absolute top-0 left-[-20%] h-full w-[70px] bg-[linear-gradient(87deg,_rgba(0,0,0,0)_0%,_rgb(234,233,234)_40%,_rgb(234,233,234)_60%,_rgba(0,0,0,0)_100%)] animate-light" />
    </div>
  );
}
