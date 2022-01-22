import styles from "./event-item.module.css";

const EventItem = (props) => {
  const humanReadableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  const humanReadableLocation = props.location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={props.image} />
      <div className={styles.content}>
        <div className={styles.top}>
          <h1>{props.title}</h1>
          <h2>{humanReadableDate}</h2>
          <address>{humanReadableLocation}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.bottom}>
          <button>Explore Event</button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
