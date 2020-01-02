// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
 
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
  
}
