import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import Loader from "../../components/Loader/Loader";

const ReviewsPage = () => {
  const {
    refetch,
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://server-side-hotel-room-bookings-main.vercel.app/review"
      ).then((res) => res.json()),
  });

  const deleteReview = (id) => {
    console.log(id);
    fetch(
      `https://server-side-hotel-room-bookings-main.vercel.app/deleteReviews?id=${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="md:overflow-x-hidden overflow-x-scroll">
      <table class="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-4 py-3">
              Id number
            </th>
            <th scope="col" class="px-4 py-3">
              Product name
            </th>
            <th scope="col" class="px-4 py-3">
              Review
            </th>
            <th scope="col" class="px-4 py-3">
              Reviewer
            </th>
            <th scope="col" class="px-4 py-3">
              Date
            </th>
            <th scope="col" class="px-4 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data?.map((review, index) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {review.product}
              </td>
              <td
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {review.review}
              </td>
              <td
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {review.name}
              </td>
              <td
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {review.date}
              </td>
              <td
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap flex dark:text-white"
              >
                <label
                  htmlFor="my-modal-3"
                  onClick={() => deleteReview(review._id)}
                  className="btn btn-primary text-white"
                >
                  <BsFillTrashFill />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsPage;
