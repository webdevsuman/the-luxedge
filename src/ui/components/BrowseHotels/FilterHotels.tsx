import React from "react";

const FilterHotels = () => {
  return (
    <div className="grid grid-cols-5 px-40 py-10">
      <div className="col-span-2 flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-extrabold">Filter By:</h2>
          <p>Your Budget For Per Night</p>
          <form action="">
            <input type="range" />
            <div className="flex gap-3">
              <input className="border" type="text" placeholder="Min Price" />
              <input className="border" type="text" placeholder="Max Price" />
            </div>
          </form>
        </div>
        {/* Popular Filters */}
        <div>
          <h3 className="text-xl font-extrabold">Popular Filters</h3>
          <form action="">
            <input type="radio" name="breakfast" id="breakfast" />
            &nbsp;
            <label htmlFor="breakfast">Breakfast included</label><br />
            <input type="radio" name="cancellation" id="cancellation" />
            &nbsp;
            <label htmlFor="cancellation">Free Cancellation</label><br />
            <input type="radio" name="inclusive" id="inclusive" />
            &nbsp;
            <label htmlFor="inclusive">All inclusive</label><br />
            <input type="radio" name="pool" id="pool" />
            &nbsp;
            <label htmlFor="pool">Pool</label><br />
            <input type="radio" name="pet" id="pet" />
            &nbsp;
            <label htmlFor="pet">Pet Friendly</label><br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterHotels;
