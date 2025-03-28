import Image from "next/image";
import MotionTransition from "../../components/transition-component";
import Introduction from "../../components/introduction";
import TransitionPage from "../../components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full">
        <Introduction/>
      </div>
    </main>
  );
}
