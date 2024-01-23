import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Reviews = ({ productName }) => {
  const { user } = useContext(AuthContext);
  let today = new Date().toISOString().slice(0, 10);
  const {
    refetch,
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: [""],
    queryFn: () =>
      fetch(
        `https://server-side-hotel-room-bookings-main.vercel.app/review?product=${productName}`
      ).then((res) => res.json()),
  });

  const gettingReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const updateReview = {
      review,
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      date: today,
      product: productName,
    };

    fetch("https://server-side-hotel-room-bookings-main.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.acknowledged) {
          form.reset();
          refetch();
        }
        if (data.message) {
          toast(`${data.message}`, {
            style: {
              background: "#3e0101cc",
              color: "white",
            },
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log(data);

  return (
    <div>
      <form action="" onSubmit={gettingReview}>
        <div className="border-b border-[#5c5c5c7e] flex justify-between mb-5">
          <input
            type="text"
            className="input bg-transparent pr-5 pl-0 text-gray-400 focus:bg-transparent w-full "
            placeholder="Here comes the review provide section"
            name="review"
          />
          <input
            type="submit"
            value="submit"
            className="btn bg-transparent text-[#9CA3AF] border-transparent rounded-none text-[12px]"
          />
        </div>
      </form>
      {data.map((review) => (
        <div className="my-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={review.img}
                className="w-14 h-14 rounded-full border object-cover border-gray-300"
              />
              <div className="ml-3">
                <h3 className="mt-0 text-gray-400 text[12px] capitalize">
                  {review.review}
                </h3>
                <h4 className="text-gray-400 text-[10px]">{review.name}</h4>
              </div>
            </div>
            <div>
              <h5 className="text-gray-400 text-sm">{review.date}</h5>
            </div>
          </div>
        </div>
      ))}
      <Toaster />
    </div>
  );
};

export default Reviews;
