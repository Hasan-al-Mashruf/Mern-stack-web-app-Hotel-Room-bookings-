import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `https://server-side-hotel-room-bookings-main.vercel.app/jwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("token", data.accessToken);
            setToken(data.accessToken);
            console.log(email, token);
          }
        })
        .finally(() => {});
    }
  }, [email]);
  return [token];
};

export default useToken;
