import { useQuery } from "@tanstack/react-query";
import React from "react";

const Bookings = () => {
  const {
    refetch,
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(
        "https://server-side-hotel-room-bookings-main.vercel.app/bookings"
      ).then((res) => res.json()),
  });
  return (
    <div>
      <div className="md:overflow-x-hidden overflow-x-scroll">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-4 py-3">
                Id number
              </th>
              <th scope="col" class="px-4 py-3">
                Guest
              </th>
              <th scope="col" class="px-4 py-3">
                Email
              </th>
              <th scope="col" class="px-4 py-3">
                Check in
              </th>
              <th scope="col" class="px-4 py-3">
                Check out
              </th>
              <th scope="col" class="px-4 py-3">
                Quantity
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
                  <div className="lg:flex items-center">
                    <div>
                      <img
                        src={review.img}
                        className="h-20 object-cover rounded-xl"
                      />
                    </div>
                    <div className="ml-3">{review.name}</div>
                  </div>
                </td>
                <td
                  scope="row"
                  class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {review.email}
                </td>
                <td
                  scope="row"
                  class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {review.checkin}
                </td>
                <td
                  scope="row"
                  class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {review.checkout}
                </td>
                <td
                  scope="row"
                  class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {review.quantity}
                </td>
                <td
                  scope="row"
                  class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white btn mt-7"
                >
                  pending
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
