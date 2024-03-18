'use client'
import React, { useEffect } from 'react'
import Router from 'next/router';

const RouteHandler = () => {
    useEffect(() => {
        const handleRouteChange = (url) => {
          // Push the page_view event to the dataLayer
          window.dataLayer.push({
            event: 'page_view',
            page: url,
          });
        };
    
        // Listen for route changes and call handleRouteChange
        Router.events.on('routeChangeComplete', handleRouteChange);
    
        // Cleanup the event listener
        return () => {
          Router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, []);

  return (
    <></>
  )
}

export default RouteHandler