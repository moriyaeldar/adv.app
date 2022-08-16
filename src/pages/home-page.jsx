import { CardSection } from "../cmps/card-section"

export const HomePage = () => {
  const qualities = ['מקצועיות','יחס אישי','מצוינות','יושרה']
  return (
    <>
    <div className="home-page">
      <h1>משרד עו"ד | אורית זילברברג</h1>
    </div>
    <div className="qualities">
{qualities.map(quality => <CardSection key={quality} children={quality} />)}
</div>
</>
  );
}