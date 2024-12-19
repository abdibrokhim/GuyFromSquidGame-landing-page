import Image from "next/image";

export default function IntroSection() {
  return (
    <div className="w-full bg-[var(--dark-pink)]" id="intro">
                <div
          className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/guyfromsquidgame.jpeg')" }}
        ></div>
    </div>
  );
}
