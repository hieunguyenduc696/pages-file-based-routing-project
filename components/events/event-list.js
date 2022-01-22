import EventItem from "./event-item";
import styles from "./event-list.module.css";

const AllEvents = (props) => {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          image={event.image}
          date={event.date}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
};

export default AllEvents;
