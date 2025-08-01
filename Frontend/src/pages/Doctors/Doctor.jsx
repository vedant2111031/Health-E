import React, { useEffect, useState } from "react";
import DoctorCard from "../../Components/Doctors/DoctorCard";
import TestimonialComponent from "../../Components/Testimonials/Testimonials";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";

const Doctor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [searchStarted, setSearchStarted] = useState(false);

  const triggerSearchInteractionEvent = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "web.webInteraction.click",
        web: {
          webInteractionDetails: {
            interactionType: "search",
            interactionAction: "overlay open"
          }
        }
      });
    } else {
      console.warn("dataLayer not found for search interaction.");
    }
  };

  const triggerSearchResultsLoadedEvent = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "web.webPageDetails.pageViews",
        web: {
          webPageDetails: {
            pageName: "Doctor Search Results",
            pageType: "search result",
            siteSection: "Doctors"
          }
        }
      });
    } else {
      console.warn("dataLayer not found for results event.");
    }
  };

  // Search click handler
  const handleSearch = () => {
    if (!searchStarted) {
      triggerSearchInteractionEvent();
      setSearchStarted(true);
    }
    setQuery(query.trim());
    triggerSearchResultsLoadedEvent();
  };

  // Debounce effect for input change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus-outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor by name or specification"
              value={query}
              onFocus={() => {
                if (!searchStarted) {
                  triggerSearchInteractionEvent();
                  setSearchStarted(true);
                }
              }}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor, index) => (
                <DoctorCard key={`${doctor.id}-${index}`} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container">
        <div className="xl:w-[470px] mx-auto py-6">
          <h2 className="heading text-center">What Our patient Says...</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched, expert health care.
          </p>
        </div>
        <TestimonialComponent />
      </section>
    </>
  );
};

export default Doctor;
