function Arrow({ theme }) {
  if (theme == "light") {
    return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 9H27V15"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 20L27 9"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 9H27V15"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 20L27 9"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
export default Arrow;
