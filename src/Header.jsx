import airbnb1 from "./assets/images/airbnb 1.png";
export default function Header() {
  return (
    <>
      <nav className="h-[70px] flex  bg-white   shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-[20px] px-[36px]">
        <img src={airbnb1} alt="" className="max-w-[100px]" />
      </nav>
    </>
  );
}
