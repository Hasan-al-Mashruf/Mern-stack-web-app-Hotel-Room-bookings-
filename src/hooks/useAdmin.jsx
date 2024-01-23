import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoader, setAdminLoader] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://server-side-hotel-room-bookings-main.vercel.app/verifyAdmin?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.isAdmin);
          setAdmin(data.isAdmin);
        })

        .finally(() => {
          setAdminLoader(false);
        });
    }
  }, [email]);
  return [admin, adminLoader];
};

export default useAdmin;
