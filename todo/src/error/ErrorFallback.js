import bandit from "../assets/bandit.webp"


const ErrorFallback = ({ error }) => {
  return (
	<div role="alert">
	  <h1 className={"error-fallback-class"}>Чики брики, и в дамки!</h1>
	  <img style={{  marginLeft: " 850px"}} src={bandit} alt="dangerous"/>
	  <p className={"error-fallback-class--text"}>{error.message}</p>
	</div>
  );
};
export default ErrorFallback;


