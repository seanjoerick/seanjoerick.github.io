import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Dynamic page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
