import error from "../img/error404.gif";
import GeneralComponent from "./General/GeneralComponent";

function ErrorPage() {
  return (
    <GeneralComponent>
      <img className="error-page-image" src={error} alt="Error Page" />
    </GeneralComponent>
  );
}

export default ErrorPage;
