import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const apiKey = process.env.REACT_APP_GMAP_API_KEY;
const mapApiJs = "https://maps.googleapis.com/maps/api/js";

// load google map api js
function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

const extractAddress = (place) => {
  const address = {
    street: "",
    city: "",
    state: "",
    zip: "",
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("street_number")) {
      address.street = `${component.long_name} ${address.street}`;
    }

    if (types.includes("route")) {
      address.street += component.short_name;
    }

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_1")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }
  });

  return address;
};

function App() {
  const searchInput = useRef(null);
  const [address, setAddress] = useState({});

  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  });

  return (
    <div className="App">
      <div>
        <div className="search">
          <input
            ref={searchInput}
            type="text"
            placeholder="Search location...."
          />
        </div>

        <div className="address">
          <p>
            Address: <span>{address.street}</span>
          </p>
          <p>
            City: <span>{address.city}</span>
          </p>
          <p>
            State: <span>{address.state}</span>
          </p>
          <p>
            Zip: <span>{address.zip}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
