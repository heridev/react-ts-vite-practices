import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>Header</header>
      <main>Main Content</main>
      <Outlet />
    </>
  )
}
