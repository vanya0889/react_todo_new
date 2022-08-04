


const ErrorFallback = ({ error }) => {
  return (
	<div role="alert">
	  <h1 className={"error-fallback-class"}>Something went wrong:</h1>
	  <p className={"error-fallback-class--text"}>{error.message}</p>
	</div>
  );
};
export default ErrorFallback;


