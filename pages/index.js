import AllEvents from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <AllEvents items={featuredEvents} />
    </div>
  );
};

export default HomePage;
