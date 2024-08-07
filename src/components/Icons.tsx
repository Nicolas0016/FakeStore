export function EmptyStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      height={30}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}
export function HalfStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      height={30}
      stroke="currentColor"
    >
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfGrad)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}
export function FullStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      height={30}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
}

export function NotFound() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="512"
      height="512"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="5px"
      >
        <path d="M1905 5113 c-492 -60 -908 -255 -1253 -587 -332 -320 -542 -715 -628 -1181 -25 -137 -31 -498 -10 -646 89 -639 445 -1190 994 -1536 638 -402 1507 -423 2166 -52 l108 61 547 -544 c376 -375 561 -553 595 -571 73 -41 141 -57 232 -57 176 0 324 86 410 239 43 77 57 144 52 250 -3 83 -8 106 -38 171 -33 73 -48 89 -583 627 l-550 552 50 88 c234 410 325 896 257 1363 -67 455 -261 850 -578 1179 -340 351 -767 569 -1248 636 -99 14 -435 19 -523 8z m500 -219 c403 -56 765 -233 1066 -522 662 -635 784 -1627 299 -2413 -49 -79 -60 -104 -60 -140 l0 -43 580 -581 c628 -629 621 -621 621 -730 0 -142 -114 -256 -256 -256 -109 0 -101 -7 -730 621 l-581 580 -44 0 c-36 0 -59 -10 -132 -55 -509 -323 -1146 -388 -1714 -175 -523 196 -956 638 -1135 1160 -143 413 -147 840 -12 1255 135 418 445 805 834 1040 380 231 817 320 1264 259z" />
        <path d="M2024 4540 c-51 -20 -71 -104 -38 -155 22 -34 75 -50 118 -35 42 14 66 48 66 95 0 47 -14 71 -50 90 -32 17 -64 18 -96 5z" />
        <path d="M2398 4487 c-37 -34 -44 -79 -21 -123 20 -39 26 -42 172 -88 198 -63 367 -164 525 -317 202 -194 331 -426 392 -704 24 -111 30 -362 10 -477 -50 -296 -176 -542 -381 -749 -203 -205 -456 -335 -753 -385 -115 -20 -366 -14 -477 10 -186 41 -377 125 -525 232 -103 74 -260 237 -328 339 -328 495 -306 1127 54 1591 150 194 352 342 602 442 63 26 86 40 97 62 30 58 12 119 -40 145 -44 20 -52 19 -137 -11 -401 -144 -751 -487 -907 -889 -299 -766 29 -1626 758 -1985 328 -162 727 -205 1081 -116 557 140 996 579 1136 1136 59 236 59 539 -1 770 -134 520 -514 929 -1022 1100 -140 47 -198 51 -235 17z" />
        <path d="M1534 3586 c-39 -39 -45 -85 -18 -126 9 -14 118 -127 243 -253 l226 -227 -237 -238 c-253 -252 -264 -268 -238 -331 23 -57 90 -78 148 -47 15 8 128 116 252 240 l225 226 225 -224 c124 -123 236 -231 250 -240 92 -60 204 52 144 144 -9 14 -117 126 -240 250 l-224 225 226 225 c124 124 232 237 240 252 31 58 10 125 -47 148 -63 26 -79 15 -331 -238 l-238 -237 -227 226 c-126 125 -239 234 -253 243 -41 27 -87 21 -126 -18z" />
      </g>
    </svg>
  );
}

export function ShoppingCart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      height={40}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}
