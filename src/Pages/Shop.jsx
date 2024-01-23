import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Image1 from "../assets/images/slider-2.jpg";
import Star from "../components/Star/Star";
import Imaga2 from "../assets/images/sale.jpg";
import Image3 from "../assets/images/star.jpg";

import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";
const Shop = () => {
  const [filterInfo, setFilterInfo] = useState("");
  const [saleRooms, setSaleRooms] = useState("");

  const {
    refetch,
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: ["rooms", filterInfo, saleRooms],
    queryFn: () =>
      fetch(
        `https://server-side-hotel-room-bookings-main.vercel.app/rooms?filterInfo=${filterInfo}&saleRooms=${saleRooms}`
      ).then((res) => res.json()),
  });

  const searchFilter = (e) => {
    if (e === "rating") {
      setSaleRooms("");
      setFilterInfo(e);
      return;
    }

    if (e.target.value === "clear") {
      setSaleRooms("");
    }

    console.log(e.target.value);
    setSaleRooms("");
    setFilterInfo(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <div
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1170px] mx-auto">
          <div className="pt-48 pb-12 text-white ">
            <a className="pr-8 home relative">Home</a>
            <a className="pr-8">Shop</a>
            <div className="mt-6 ">
              <h4 className="hotelName relative text-3xl text-white">Shop</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto my-16">
        <div className="md:grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <div className="flex items-center justify-between mb-5 flex-col md:flex-row">
              <h5>Showng all {data?.length} results</h5>
              <select
                className="select select-bordered w-full max-w-xs mt-5 md:mt-0"
                onChange={searchFilter}
              >
                <option selected value="default">
                  Default search
                </option>
                <option value="rating">Search by popularity</option>
                <option value="descending">Search by price: low to high</option>
                <option value="ascending">Search by price: high to low</option>
                <option value="clear">Clear filter</option>
              </select>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {data?.map((room) => (
                <div>
                  <Link to={`/roomDetails/${room?._id}`}>
                    <div className="card card-compact shadow-xl rounded-none">
                      <div className="relative">
                        <div className="relative roomImage inline-block w-full">
                          <img
                            src={room.img}
                            alt="Shoes"
                            className="block w-full h-40 object-cover"
                          />
                          <h3 className="bg-yellow-400 px-3 py-1 absolute top-[15px] left-0 text-white">
                            ${room.prize}
                          </h3>
                          <div className="flex absolute bottom-0 bg-[#3d3d3d54] w-full pl-5 text-white">
                            <div className="mr-5">
                              <span className="people text-sm">
                                {room.people.adults} people
                              </span>
                            </div>
                            <div>
                              <span className="children text-sm">
                                {room.people.children} children
                              </span>
                            </div>
                          </div>
                          <div className="image-overlay"></div>
                        </div>
                        {room?.status ? (
                          <span className="bg-[#26bdf7] px-3 py-1 absolute top-[15px] right-[-7px] status">
                            {room?.status}
                          </span>
                        ) : undefined}
                      </div>

                      <div className="card-body">
                        <div className="grid grid-cols-4">
                          <div className="col-span-4">
                            <h3 className="card-title">{room.name}</h3>
                          </div>
                          <div className="col-span-4 mt-3">
                            <p>{room.details}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#e0e0e052] items-center pl-4">
                        <div>
                          <Star rating={room?.rating}></Star>
                        </div>
                        <div>
                          <button className="btn btn-primary rounded-none relative shopBtn ml-2 text-[12px] text-white">
                            Checkout Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              className="relative overflow-hidden mt-10 md:mt-0 cursor-pointer"
              onClick={() => setSaleRooms("status")}
            >
              <img src={Imaga2} alt="" />
              <div className="content absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <h4 className="text-white md:text-3xl text-5xl text-center ">
                  Huge sale
                </h4>
              </div>
              <div className="content absolute z-10 right-[-26px] top-4 rotate-45 w-28 ">
                <h4 className="text-white text-md text-center bg-yellow-400">
                  40%
                </h4>
              </div>
              <div className="overlay absolute bg-black opacity-[.7]"></div>
            </div>
            <div
              className="relative overflow-hidden mt-10 cursor-pointer"
              onClick={() => searchFilter("rating")}
            >
              <img src={Image3} alt="" />
              <div className="content absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <h4 className="text-white md:text-3xl text-5xl text-center ">
                  Top ratings
                </h4>
              </div>
              <div className="content absolute z-10 right-[-26px] top-4 rotate-45 w-28 ">
                <h4 className="text-white text-md text-center bg-yellow-400">
                  5 star
                </h4>
              </div>
              <div className="overlay absolute bg-black opacity-[.7]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
