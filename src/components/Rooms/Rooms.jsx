import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Star from "../Star/Star";
import "./Rooms.css";

const Rooms = () => {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: () =>
      fetch(
        "https://server-side-hotel-room-bookings-main.vercel.app/rooms"
      ).then((res) => res.json()),
  });

  return (
    <div className="max-w-[1170px] mx-auto " id="room">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-3xl font-bold text-[#333] mb-3">
          Most popular rooms
        </h2>
        <a href="" className="underline text-yellow-600">
          View All Rooms
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-5 gap-y-10 m-3 md:m-0">
        {data?.map((room) => (
          <div key={room._id}>
            <Link to={`/roomDetails/${room?._id}`}>
              <div className="card card-compact shadow-xl rounded-none">
                <div className="relative">
                  <div className="relative roomImage inline-block">
                    <img
                      src={room.img}
                      alt="Shoes"
                      className="block w-full h-60 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#ffffff4d] w-full pl-3 p-3">
                      <Star rating={room?.rating}></Star>
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
                    <div className="col-span-3">
                      <h3 className="card-title">{room.name}</h3>
                    </div>
                    <div className="text-end">
                      <span
                        className={
                          room?.oldPrize
                            ? "text-gray-600 line-through"
                            : "text-gray-600"
                        }
                      >
                        {room?.oldPrize ? <>${room.oldPrize}</> : "From"}
                      </span>{" "}
                      <br />{" "}
                      <h3 className="text-2xl text-yellow-600">
                        {" "}
                        ${room.prize}
                      </h3>
                    </div>
                    <div className="col-span-3 mt-3">
                      <p>{room.details}</p>
                    </div>
                  </div>
                  <div className="card-footer py-3 flex">
                    <div className="mr-5">
                      <span className="people">
                        {room.people.adults} people
                      </span>
                    </div>
                    <div>
                      <span className="children">
                        {room.people.children} children
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
