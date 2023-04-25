import error from "../img/error404.gif";

const style = {
  height: "60vh",
};

function ErrorPage() {
  return (
    <>
      <img src={error} alt="Error Page" style={style} />
    </>
  );
}

export default ErrorPage;
