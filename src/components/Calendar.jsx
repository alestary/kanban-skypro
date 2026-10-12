function Calendar() {
  return (
    <div className="card__date">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
      >
        <rect
          x="1.2"
          y="2"
          width="10.6"
          height="9.6"
          rx="1.2"
          stroke="#94A6BE"
          strokeWidth="0.8"
        />
        <path
          d="M1.2 4.1H11.8"
          stroke="#94A6BE"
          strokeWidth="0.8"
        />
        <path
          d="M3.25 1.2V2.5M9.75 1.2V2.5"
          stroke="#94A6BE"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
      <p>30.10.23</p>
    </div>
  );
}

export default Calendar;