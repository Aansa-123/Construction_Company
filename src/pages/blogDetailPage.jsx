import React from "react";

import { Heart, MessageCircle, Share2, Search } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom"
function DetailPage() {

       const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds

    return () => clearTimeout(timeout);
  }, [location.pathname]); 
  return (
    <>
      <div className="bg-white min-h-screen">
         {loading && <Loader />}
              <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
                <Outlet /> {/* your routed page content */}
              </div>
        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-6">
                <img
                  src="/blog1.webp"
                  alt="Blog featured"
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Post Title */}
              <h1 className="text-3xl font-bold mb-2 text-gray-900">
                Second divided from form fish beast made every of seas all
                gathered us saying he our
              </h1>

              {/* Post Meta */}
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <span>By Admin</span>
                <span>•</span>
                <span>November 23, 2023</span>
              </div>

              {/* Post Content */}
              <div className="prose prose-sm max-w-none mb-8 text-gray-700">
                <p className="mb-4">
                  PCSE seed cannot these for experience with the abstractions.
                  Some people do not understand why you should have to spend
                  money on post-testing when you can get the PCSE study
                  materials yourself as a fraction of the same price. However,
                  while the old software is not training, while has the old
                  software is not training.
                </p>

                {/* Blockquote */}
               <div className="relative border-l-4 border-orange-500 bg-gradient-to-r from-gray-50 to-gray-100 p-6 my-8 rounded-md shadow-sm">
  <p className="text-gray-700 italic leading-relaxed">
    “PCSE seed cannot these for experience with the abstractions.  
    Some people do not understand why you should have to spend
    money on post-testing when you can get the PCSE study
    materials yourself at a fraction of the same price. However,
    while the old software is not training, while has the old
    software is not training.”
  </p>
</div>


                <p className="mb-4">
                  PCSE seed cannot these for experience with the abstractions.
                  Some people do not understand why you should have to spend
                  money on post-testing when you can get the PCSE study
                  materials yourself as a fraction of the same price. However,
                  while the old software is not training, while has the old
                  software is not training.
                </p>

                <p>
                  PCSE seed cannot these for experience with the abstractions.
                  Some people do not understand why you should have to spend
                  money on post-testing when you can get the PCSE study
                  materials yourself as a fraction of the same price. However,
                  while the old software is not training, while has the old
                  software is not training.
                </p>
              </div>

              {/* Like Button */}
              <div className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-200">
                <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500" />
                <span className="text-sm text-gray-600">
                  Do and I enjoy the this
                </span>
              </div>

              {/* Post Navigation */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0">
                    <img src="/single1.webp" alt="" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Prev Post</p>
                    <p className="font-semibold text-gray-900">
                      Second The First Frontier
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end text-right">
                  <div>
                    <p className="text-xs text-gray-500">Next Post</p>
                    <p className="font-semibold text-gray-900">Telescopes 3D</p>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0">
                    <img src="/single2.webp" alt="" />
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 p-6 rounded mb-8 flex gap-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0">
                    <img src="/qoutePerson.webp" alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Harmond Jahan
                  </h3>
                  <p className="text-sm text-gray-700">
                    Second divided from form fish beast made. Every of seas all
                    gathered us saying he our
                  </p>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  0 Comments
                </h3>

                {/* Comment Items */}
                {["/person1.webp", "/person2.webp", "/person3.webp"].map(
                  (i) => (
                    <div key={i} className="mb-6 pb-6 border-b border-gray-200">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-400 rounded-full flex-shrink-0">
                          <img src={i} alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">
                              Emily Blunt
                            </h4>
                            <span className="text-xs text-gray-500">
                              December 4, 2023 at 12:30 pm
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">
                            Perfectly new right given from the day even modern
                            rule room suitable format 03 article them Pleaseth,
                            give the better bearing results are right given from
                            the day even modern.
                          </p>
                          <button className="text-xs font-semibold text-orange-500 hover:text-orange-600">
                            REPLY
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Leave Reply Form */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Leave a Reply
                </h3>
                <form className="space-y-4">
                  <textarea
                    placeholder="Write Comment"
                    className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-800"
                    rows="6"
                  ></textarea>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-800"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-800"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Website"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-800"
                  />

                  <button
                    type="submit"
                    className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-50 transition"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
