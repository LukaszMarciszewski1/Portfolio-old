export const showSvg = () => {
    const svgContainer = document.querySelector('.intro-container')
    const svg = document.createElement('div');
    svg.className = 'intro-svg'
    svg.innerHTML = `
    <svg width="1153" height="494" viewBox="0 0 1153 494" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="static" clip-path="url(#clip0)">
    <path id="Vector" d="M253.076 275.591C253.087 274.075 252.785 272.573 252.189 271.179C251.593 269.784 250.716 268.528 249.613 267.488C248.51 266.448 247.204 265.646 245.778 265.134C244.351 264.621 242.834 264.408 241.322 264.508C239.809 264.608 238.333 265.019 236.987 265.715C235.64 266.41 234.451 267.377 233.494 268.553C232.538 269.729 231.834 271.09 231.426 272.55C231.019 274.011 230.917 275.54 231.127 277.041L199.444 318.543C198.092 321.247 197.568 324.291 197.937 327.292C198.306 330.293 199.553 333.119 201.52 335.415L204.005 338.315L215.409 336.033L228.333 324.626L226.813 311.699L242.778 286.604L242.758 286.586C245.552 286.408 248.174 285.172 250.091 283.13C252.007 281.088 253.075 278.392 253.076 275.591Z" fill="#FFB9B9"/>
    <path id="Vector_2" d="M33.9753 478.487L28.8034 459.273L100.43 430.179L108.062 458.535L33.9753 478.487Z" fill="#FFB8B8"/>
    <path id="Vector_3" d="M16.675 488.401L0 426.451L0.783353 426.24C7.17666 424.518 13.9918 425.407 19.7298 428.712C25.4677 432.016 29.6586 437.465 31.3805 443.859L31.3809 443.861L41.5653 481.698L16.675 488.401Z" fill="#2F2E41"/>
    <path id="Vector_4" d="M132.637 475.417L116.55 463.715L154.02 396.078L177.764 413.349L132.637 475.417Z" fill="#FFB8B8"/>
    <path id="Vector_5" d="M125.4 494L73.5271 456.266L74.0042 455.61C77.8985 450.254 83.7602 446.665 90.3001 445.632C96.8399 444.598 103.522 446.206 108.877 450.1L108.879 450.101L140.561 473.148L125.4 494Z" fill="#2F2E41"/>
    <path id="Vector_6" d="M269.387 380.9L228.904 341.563C225.371 338.13 220.718 336.088 215.799 335.813C210.881 335.539 206.029 337.049 202.136 340.067L125.698 425.007L132.541 435.653L205.525 386.223L254.942 450.862L302.078 427.288L269.387 380.9Z" fill="#2F2E41"/>
    <path id="Vector_7" d="M251.901 389.265L222.251 386.984L200.779 381.777C199.566 379.884 197.804 378.407 195.729 377.544C193.654 376.68 191.364 376.472 189.167 376.946C186.97 377.42 184.97 378.554 183.436 380.196C181.901 381.838 180.904 383.91 180.579 386.135C180.254 388.359 180.616 390.63 181.617 392.643C182.617 394.656 184.209 396.315 186.178 397.398C188.148 398.481 190.401 398.937 192.636 398.704C194.872 398.471 196.983 397.56 198.686 396.094L198.683 396.109L211.608 401.432L267.106 420.444L273.949 415.121L251.901 389.265Z" fill="#FFB9B9"/>
    <path id="Vector_8" d="M323.365 471.395L306.639 482.041H286.872L194.882 447.821L60.3166 472.155L56.5154 443.257L179.677 389.265L287.634 425.006L323.365 471.395Z" fill="#2F2E41"/>
    <path id="Vector_9" d="M287.633 286.604C304.009 286.604 317.283 273.325 317.283 256.946C317.283 240.566 304.009 227.288 287.633 227.288C271.258 227.288 257.983 240.566 257.983 256.946C257.983 273.325 271.258 286.604 287.633 286.604Z" fill="#FFB9B9"/>
    <path id="Vector_10" d="M364.351 375.356C364.35 393.255 361.531 411.042 355.996 428.064L353.776 434.892L343.132 483.562L331.728 486.603L323.365 475.957L306.64 463.79L294.476 444.018L284.045 426.634L280.791 421.204L269.387 364.17L226.053 339.836L211.608 337.554L214.649 329.189L227.573 311.699L240.497 310.178L244.299 307.136L247.34 308.657L264.103 315.116L318.454 292.147L326.406 293.448L353.776 316.261C360.772 335.178 364.353 355.187 364.351 375.356Z" fill="#CCCCCC"/>
    <path id="Vector_11" opacity="0.1" d="M356.056 368.733L327.166 387.744L284.045 426.633L280.791 421.204L271.668 375.577H273.949L297.517 332.232L356.056 368.733Z" fill="black"/>
    <path id="Vector_12" d="M297.517 327.668L273.949 371.014L260.264 386.223L248.101 389.265L280.791 425.006L327.166 383.182L356.056 364.17L297.517 327.668Z" fill="#CCCCCC"/>
    <path id="Vector_13" d="M264.572 234.894L261.359 236.13C260.871 235.8 260.454 235.377 260.129 234.885C259.805 234.393 259.581 233.842 259.47 233.264C259.358 232.686 259.362 232.091 259.48 231.514C259.599 230.937 259.83 230.389 260.16 229.901C260.177 229.875 260.195 229.85 260.213 229.825L254.276 229.547C258.087 224.47 262.932 220.26 268.491 217.197C274.05 214.133 280.196 212.285 286.523 211.775C292.849 211.265 299.212 212.104 305.19 214.238C311.168 216.371 316.624 219.75 321.199 224.151C321.469 223.22 324.416 225.032 325.619 226.869C326.023 225.353 328.785 232.678 329.763 237.855C330.215 236.131 331.954 238.914 330.43 241.585C331.396 241.444 331.832 243.914 331.085 245.291C332.141 244.795 331.963 247.744 330.818 249.715C332.325 249.581 330.689 280.634 308.07 278.372C306.495 271.134 306.939 271.584 305.085 262.278C304.221 261.362 303.276 260.527 302.333 259.694L297.229 255.188C291.295 249.948 285.896 243.481 277.99 241.522C272.557 240.177 269.122 239.873 272.083 233.749C269.408 234.866 266.91 236.526 264.211 237.563C264.247 236.708 264.624 235.75 264.572 234.894Z" fill="#2F2E41"/>
    <path id="Vector_14" d="M302.458 265.691C305.397 265.691 307.78 263.308 307.78 260.368C307.78 257.428 305.397 255.045 302.458 255.045C299.519 255.045 297.137 257.428 297.137 260.368C297.137 263.308 299.519 265.691 302.458 265.691Z" fill="#FFB9B9"/>
    <path id="Vector_15" d="M1089.43 0H366.313C363.699 -2.97117e-06 361.111 0.514943 358.696 1.51544C356.281 2.51593 354.087 3.98237 352.239 5.83104C350.391 7.67971 348.925 9.87441 347.925 12.2898C346.924 14.7052 346.41 17.294 346.41 19.9085V422.922C346.41 425.537 346.924 428.126 347.925 430.541C348.925 432.956 350.391 435.151 352.239 437C354.087 438.849 356.281 440.315 358.696 441.315C361.111 442.316 363.699 442.831 366.313 442.831H1089.43C1094.71 442.831 1099.77 440.733 1103.51 437C1107.24 433.266 1109.34 428.202 1109.34 422.922V19.9085C1109.34 14.6284 1107.24 9.56462 1103.51 5.83106C1099.77 2.0975 1094.71 3.00029e-06 1089.43 0Z" fill="#5C5C5C"/>
    <path id="Vector_16" d="M1082.65 35.1838H373.094V435.551H1082.65V35.1838Z" fill="white"/>
    <path id="Vector_17" d="M727.266 24.2647C731.285 24.2647 734.543 21.0056 734.543 16.9853C734.543 12.965 731.285 9.7059 727.266 9.7059C723.247 9.7059 719.988 12.965 719.988 16.9853C719.988 21.0056 723.247 24.2647 727.266 24.2647Z" fill="white"/>
    <path id="Vector_18" d="M879.729 435.552H373.094V35.1844L879.729 435.552Z" fill="#F2F2F2"/>
    <path id="Vector_19" d="M484.118 405.592C521.787 405.592 552.323 375.047 552.323 337.369C552.323 299.691 521.787 269.146 484.118 269.146C446.45 269.146 415.913 299.691 415.913 337.369C415.913 375.047 446.45 405.592 484.118 405.592Z" fill="#191919"/>
    <path id="Vector_20" d="M499.301 388.645C482.522 388.645 466.119 383.668 452.167 374.343C438.215 365.018 427.341 351.765 420.919 336.258C414.498 320.752 412.818 303.689 416.091 287.227C419.365 270.765 427.445 255.644 439.31 243.776C451.175 231.908 466.293 223.825 482.75 220.551C499.207 217.277 516.266 218.957 531.768 225.38C547.271 231.803 560.521 242.68 569.843 256.636C579.166 270.591 584.142 286.999 584.142 303.783C584.142 314.927 581.947 325.962 577.683 336.258C573.42 346.554 567.171 355.909 559.292 363.789C551.414 371.67 542.062 377.921 531.768 382.185C521.475 386.45 510.443 388.645 499.301 388.645ZM499.301 220.03C482.741 220.03 466.552 224.942 452.783 234.145C439.013 243.347 428.281 256.428 421.944 271.732C415.606 287.036 413.948 303.876 417.179 320.122C420.41 336.369 428.384 351.292 440.094 363.005C451.804 374.718 466.724 382.695 482.966 385.926C499.208 389.158 516.044 387.499 531.344 381.16C546.644 374.821 559.721 364.087 568.921 350.313C578.122 336.54 583.033 320.348 583.033 303.783C583.033 292.784 580.867 281.893 576.659 271.732C572.451 261.57 566.283 252.338 558.508 244.56C550.733 236.783 541.503 230.614 531.344 226.405C521.185 222.196 510.297 220.03 499.301 220.03L499.301 220.03Z" fill="#3F3D56"/>
    <path id="button" d="M918.391 243.186H852.11V257.04H918.391V243.186Z" fill="#191919"/>
    <path id="Vector_21" d="M981.098 168.136H789.403V174.073H981.098V168.136Z" fill="#191919"/>
    <path id="Vector_22" d="M981.098 191.461H789.403V197.399H981.098V191.461Z" fill="#191919"/>
    <path id="Vector_23" d="M981.098 214.787H789.403V220.724H981.098V214.787Z" fill="#191919"/>
    <path id="Vector_24" d="M1032.45 59.1441H1004.75V86.8506H1032.45V59.1441Z" fill="#191919"/>
    <path id="Vector_25" d="M1045.31 99.7143H1011.67V66.0707H1045.31V99.7143ZM1013.14 98.2516H1043.85V67.5335H1013.14L1013.14 98.2516Z" fill="#64F4AC"/>
    <path id="Vector_26" d="M1129.26 428.272H1060.01V423.281C1060.01 423.151 1059.98 423.023 1059.93 422.903C1059.88 422.783 1059.81 422.674 1059.72 422.582C1059.63 422.49 1059.52 422.417 1059.4 422.367C1059.28 422.318 1059.15 422.292 1059.02 422.292H1035.28C1035.15 422.292 1035.02 422.318 1034.9 422.367C1034.78 422.417 1034.67 422.49 1034.58 422.582C1034.49 422.674 1034.41 422.783 1034.36 422.903C1034.31 423.023 1034.29 423.151 1034.29 423.281V428.272H1019.45V423.281C1019.45 423.151 1019.42 423.023 1019.37 422.903C1019.32 422.783 1019.25 422.674 1019.16 422.582C1019.07 422.49 1018.96 422.417 1018.84 422.367C1018.72 422.318 1018.59 422.292 1018.46 422.292H994.718C994.589 422.292 994.46 422.318 994.34 422.367C994.22 422.417 994.111 422.49 994.019 422.582C993.927 422.674 993.854 422.783 993.804 422.903C993.755 423.023 993.729 423.151 993.729 423.281V428.272H978.89V423.281C978.89 423.151 978.865 423.023 978.815 422.903C978.765 422.783 978.692 422.674 978.601 422.582C978.509 422.49 978.4 422.417 978.28 422.367C978.16 422.318 978.031 422.292 977.901 422.292H954.159C954.029 422.292 953.9 422.318 953.78 422.367C953.66 422.417 953.551 422.49 953.459 422.582C953.367 422.674 953.294 422.783 953.245 422.903C953.195 423.023 953.169 423.151 953.169 423.281V428.272H938.331V423.281C938.331 423.151 938.305 423.023 938.255 422.903C938.206 422.783 938.133 422.674 938.041 422.582C937.949 422.49 937.84 422.417 937.72 422.367C937.6 422.318 937.471 422.292 937.341 422.292H913.599C913.469 422.292 913.341 422.318 913.221 422.367C913.101 422.417 912.992 422.49 912.9 422.582C912.808 422.674 912.735 422.783 912.685 422.903C912.636 423.023 912.61 423.151 912.61 423.281V428.272H897.771V423.281C897.771 423.151 897.745 423.023 897.696 422.903C897.646 422.783 897.573 422.674 897.481 422.582C897.389 422.49 897.28 422.417 897.16 422.367C897.04 422.318 896.912 422.292 896.782 422.292H873.04C872.91 422.292 872.781 422.318 872.661 422.367C872.541 422.417 872.432 422.49 872.34 422.582C872.248 422.674 872.175 422.783 872.126 422.903C872.076 423.023 872.05 423.151 872.05 423.281V428.272H857.211V423.281C857.211 423.151 857.186 423.023 857.136 422.903C857.086 422.783 857.013 422.674 856.922 422.582C856.83 422.49 856.721 422.417 856.601 422.367C856.481 422.318 856.352 422.292 856.222 422.292H832.48C832.35 422.292 832.221 422.318 832.101 422.367C831.981 422.417 831.872 422.49 831.78 422.582C831.689 422.674 831.616 422.783 831.566 422.903C831.516 423.023 831.491 423.151 831.491 423.281V428.272H816.652V423.281C816.652 423.151 816.626 423.023 816.577 422.903C816.527 422.783 816.454 422.674 816.362 422.582C816.27 422.49 816.161 422.417 816.041 422.367C815.921 422.318 815.793 422.292 815.663 422.292H629.682C629.552 422.292 629.423 422.318 629.303 422.367C629.183 422.417 629.074 422.49 628.982 422.582C628.89 422.674 628.818 422.783 628.768 422.903C628.718 423.023 628.693 423.151 628.693 423.281V428.272H613.854V423.281C613.854 423.151 613.828 423.023 613.778 422.903C613.729 422.783 613.656 422.674 613.564 422.582C613.472 422.49 613.363 422.417 613.243 422.367C613.123 422.318 612.994 422.292 612.864 422.292H589.122C588.992 422.292 588.864 422.318 588.744 422.367C588.624 422.417 588.515 422.49 588.423 422.582C588.331 422.674 588.258 422.783 588.208 422.903C588.159 423.023 588.133 423.151 588.133 423.281V428.272H573.294V423.281C573.294 423.151 573.268 423.023 573.219 422.903C573.169 422.783 573.096 422.674 573.004 422.582C572.913 422.49 572.803 422.417 572.683 422.367C572.563 422.318 572.435 422.292 572.305 422.292H548.563C548.433 422.292 548.304 422.318 548.184 422.367C548.064 422.417 547.955 422.49 547.863 422.582C547.771 422.674 547.698 422.783 547.649 422.903C547.599 423.023 547.573 423.151 547.573 423.281V428.272H532.734V423.281C532.734 423.151 532.709 423.023 532.659 422.903C532.609 422.783 532.536 422.674 532.445 422.582C532.353 422.49 532.244 422.417 532.124 422.367C532.004 422.318 531.875 422.292 531.745 422.292H508.003C507.873 422.292 507.744 422.318 507.624 422.367C507.504 422.417 507.395 422.49 507.303 422.582C507.212 422.674 507.139 422.783 507.089 422.903C507.039 423.023 507.014 423.151 507.014 423.281V428.272H492.175V423.281C492.175 423.151 492.149 423.023 492.1 422.903C492.05 422.783 491.977 422.674 491.885 422.582C491.793 422.49 491.684 422.417 491.564 422.367C491.444 422.318 491.315 422.292 491.186 422.292H467.443C467.313 422.292 467.185 422.318 467.065 422.367C466.945 422.417 466.836 422.49 466.744 422.582C466.652 422.674 466.579 422.783 466.529 422.903C466.48 423.023 466.454 423.151 466.454 423.281V428.272H451.615V423.281C451.615 423.151 451.59 423.023 451.54 422.903C451.49 422.783 451.417 422.674 451.325 422.582C451.234 422.49 451.124 422.417 451.004 422.367C450.884 422.318 450.756 422.292 450.626 422.292H426.884C426.621 422.292 426.37 422.396 426.184 422.582C425.999 422.767 425.894 423.019 425.894 423.281V428.272H411.055V423.281C411.055 423.151 411.03 423.023 410.98 422.903C410.93 422.783 410.858 422.674 410.766 422.582C410.674 422.49 410.565 422.417 410.445 422.367C410.325 422.318 410.196 422.292 410.066 422.292H386.324C386.062 422.292 385.81 422.396 385.625 422.582C385.439 422.767 385.335 423.019 385.335 423.281V428.272H339.829C333.532 428.272 327.493 430.774 323.041 435.228C318.588 439.681 316.087 445.722 316.087 452.02V462.759C316.087 469.057 318.588 475.098 323.041 479.552C327.493 484.005 333.532 486.507 339.829 486.507H1129.26C1135.55 486.507 1141.59 484.005 1146.05 479.552C1150.5 475.098 1153 469.057 1153 462.759V452.02C1153 448.902 1152.39 445.814 1151.19 442.932C1150 440.051 1148.25 437.433 1146.05 435.228C1143.84 433.023 1141.22 431.273 1138.34 430.08C1135.46 428.886 1132.38 428.272 1129.26 428.272Z" fill="#5C5C5C"/>
    <g id="Group 1">
    <path id="rectangle1" d="M54.2836 134.645L52.6595 159.038L77.0458 160.662L78.6698 136.27L54.2836 134.645Z" fill="#E6E6E6"/>
    <path id="outline1" d="M38.5496 147.598L68.1615 149.57L66.1894 179.19L36.5776 177.217L38.5496 147.598ZM66.7882 150.772L39.7514 148.971L37.9508 176.015L64.9877 177.816L66.7882 150.772Z" fill="#64F4AC"/>
    <path id="rectangle2" d="M192.094 62.314L168.199 67.4496L173.333 91.3507L197.228 86.2151L192.094 62.314Z" fill="#E6E6E6"/>
    <path id="outline2" d="M175.323 50.7372L181.557 79.76L152.542 85.9961L146.307 56.9733L175.323 50.7372ZM180.025 78.7693L174.332 52.2702L147.84 57.9641L153.532 84.4631L180.025 78.7693Z" fill="#64F4AC"/>
    <path id="rectangle3" d="M166.986 177.096L149.149 193.808L165.857 211.65L183.694 194.938L166.986 177.096Z" fill="#E6E6E6"/>
    <path id="outline3" d="M184.977 174.596L163.317 194.889L143.029 173.224L164.689 152.93L184.977 174.596ZM163.377 193.065L183.153 174.536L164.629 154.754L144.853 173.283L163.377 193.065Z" fill="#64F4AC"/>
    <path id="button_2" d="M918.391 243.186H852.11V257.04H918.391V243.186Z" fill="#191919"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="1153" height="494" fill="white"/>
    </clipPath>
    </defs>
    </svg>
`
    svgContainer.appendChild(svg);
}