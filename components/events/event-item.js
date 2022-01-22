import Link from "next/link";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";

import styles from "./event-item.module.css";

const EventItem = (props) => {
  const humanReadableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  const humanReadableLocation = props.location.replace(", ", "\n");
  const exploreLink = `/events/${props.id}`;

  return (
    <li className={styles.item}>
      <img src={props.image} />
      <div className={styles.content}>
        <div className={styles.top}>
          <h1>{props.title}</h1>
          <div className={styles.calendar}>
            <DateIcon />
            <h2>{humanReadableDate}</h2>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{humanReadableLocation}</address>
          </div>
          <p>{props.description}</p>
        </div>
        <div className={styles.bottom}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
