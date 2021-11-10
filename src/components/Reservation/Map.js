import React from "react";

const Map = () => {
  return (
    <>
      <iframe
        title="map"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Front%20Street%20Toronto+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="520"
        height="400"
        frameborder="0"
      ></iframe>{" "}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=0836f911597ebdbff9ee84cff958a1b7b144863d"
      ></script>
    </>
  );
};

export default Map;
