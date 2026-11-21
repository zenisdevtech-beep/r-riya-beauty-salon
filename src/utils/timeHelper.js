// Time helper for Vadodara, India (IST: UTC+5:30)
export function getSalonCurrentStatus() {
  const now = new Date();
  
  // Calculate IST time (UTC + 5.5 hours)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utc + istOffset);
  
  const currentHour = istDate.getHours();
  const currentMinutes = istDate.getMinutes();
  const currentTimeDecimal = currentHour + currentMinutes / 60;
  
  const openTime = 10; // 10:00 AM
  const closeTime = 20; // 8:00 PM
  
  const isOpen = currentTimeDecimal >= openTime && currentTimeDecimal < closeTime;
  
  let statusText = "";
  let statusColor = "";
  
  if (isOpen) {
    if (currentTimeDecimal >= 18) {
      statusText = "Open Now • Peak Hours (Busy) • Closes at 8:00 PM";
      statusColor = "text-amber-600 bg-amber-50 border-amber-200";
    } else if (currentTimeDecimal >= 14) {
      statusText = "Open Now • Closes at 8:00 PM";
      statusColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
    } else {
      statusText = "Open Now • Walk-ins & Appointments Welcome";
      statusColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
    }
  } else {
    if (currentTimeDecimal < openTime) {
      statusText = "Opens today at 10:00 AM • Book Ahead Online";
      statusColor = "text-pink-700 bg-pink-50 border-pink-200";
    } else {
      statusText = "Closed for tonight • Reopens tomorrow at 10:00 AM";
      statusColor = "text-purple-700 bg-purple-50 border-purple-200";
    }
  }
  
  return {
    isOpen,
    statusText,
    statusColor,
    istTimeString: istDate.toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit', hour12: true })
  };
}
