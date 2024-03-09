import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.log('error', error)
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected erorr happened</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
    </div>

  )
}
