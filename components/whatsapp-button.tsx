import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20premium%20uPVC%20windows%20and%20doors.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat with Windows Plaza on WhatsApp for instant support and quotes"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.468.657 4.876 1.904 6.989L2 30l7.18-1.882A13.94 13.94 0 0016.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm0 25.63a11.57 11.57 0 01-5.916-1.623l-.425-.252-4.267 1.119 1.14-4.16-.278-.44A11.58 11.58 0 014.37 16.004c0-6.414 5.22-11.634 11.634-11.634 6.414 0 11.634 5.22 11.634 11.634 0 6.414-5.22 11.628-11.634 11.628zm6.378-8.715c-.35-.175-2.07-1.02-2.39-1.137-.32-.117-.553-.175-.786.175-.234.35-.904 1.137-1.108 1.371-.204.234-.408.263-.758.088-.35-.175-1.478-.545-2.815-1.737-1.04-.928-1.743-2.074-1.948-2.424-.204-.35-.022-.539.154-.713.158-.157.35-.408.525-.613.175-.204.234-.35.35-.583.117-.234.058-.438-.03-.613-.087-.175-.785-1.893-1.076-2.592-.283-.68-.571-.588-.786-.599-.204-.009-.438-.011-.671-.011-.234 0-.613.088-.934.438-.32.35-1.222 1.195-1.222 2.914 0 1.718 1.252 3.378 1.427 3.612.175.234 2.464 3.76 5.97 5.273.834.36 1.485.575 1.993.736.838.266 1.6.228 2.202.138.671-.1 2.07-.846 2.362-1.663.292-.817.292-1.518.204-1.663-.088-.146-.32-.234-.671-.409z"
          fill="white"
        />
      </svg>
    </Link>
  )
}
