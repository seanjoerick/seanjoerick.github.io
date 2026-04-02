import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
import { GridScan } from "@components/react-bits/GridScan";

function Main() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <GridScan
          sensitivity={0.55}
          lineThickness={2}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div
        className="relative flex flex-col min-h-screen"
        style={{ zIndex: 1 }}
      >
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Main;
