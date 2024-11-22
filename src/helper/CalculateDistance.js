

const calculateDistance = (user_lat1, user_lon1, db_lat2, db_lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (db_lat2 - user_lat1) * Math.PI/ 180;
  const dLon = (db_lon2 - user_lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(user_lat1 * Math.PI / 180) * Math.cos(db_lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

export {
  calculateDistance
}