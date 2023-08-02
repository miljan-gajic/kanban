import { useNavigate } from "@solidjs/router";

const FallbackRedirect = () => {
  const navigate = useNavigate();
  navigate("/");
  return <></>;
};

export default FallbackRedirect;
