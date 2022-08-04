import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ErrorFallback from "./ErrorFallback";




const ErrorBoundary = (props) => {
  const { children } = props;
  const [errorState, setErrorState] = useState(false);
  const { hasError } = useSelector((state) => state.share);



  useEffect(() => {
	if (hasError) {
	  setErrorState(true);
	}
  }, [hasError]);

  return errorState ? <ErrorFallback error={hasError} /> : children;
};
export default ErrorBoundary;