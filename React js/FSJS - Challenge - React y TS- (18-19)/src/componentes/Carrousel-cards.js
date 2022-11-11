import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";

export function GroupExample() {
  let celulares = [
    {
      id: 1,
      title: "Samsung Galaxy S22 ULTRA  ",
      text: "text",
      price: "$200.000",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/2208/gallery/ar-galaxy-z-fold4-f936-429925-sm-f936bzamaro-thumb-533083370?$160_160_PNG$",
      procuto: "celular",
    },
    {
      id: 2,
      title: "Samsung Galaxy S20 FE",
      text: "text",
      price: "$150.000",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g998bzkvaro/gallery/ar-galaxy-s21-ultra-5g-g988-371123-sm-g998bzkvaro-thumb-457947389?$160_160_PNG$",
      procuto: "celular",
    },
    {
      id: 3,
      title: "Samsung Galaxy A33 ",
      text: "text",
      price: "$90.000",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzvlaro-thumb-368338843?$160_160_PNG$",
      procuto: "celular",
    },
    {
      id: 4,
      title: "Samsung Galaxy A53 ",
      text: "text",
      price: "$80.000",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990ezwaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990ezwaaro-thumb-530832036?$160_160_PNG$",
      procuto: "celular",
    },
    {
      id: 5,
      title: "Samsung Galaxy S22+",
      text: "text",
      price: "$70.000",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g780gzblaro/gallery/ar-galaxy-s20-fe-g780-393076-sm-g780gzblaro-thumb-460333106?$160_160_PNG$",
      procuto: "celular",
    },
  ];

  return (
    <>
      <section className="carrousel-card">
        <Carousel variant="dark" className="mb-5">
          <Carousel.Item>
            <CardGroup className="card-group">
              {celulares.map((Element) => (
                <Card className="text-center card" key={Element.id}>
                  <Card.Img src={Element.img} alt="logo" />
                  <Card.Body>
                    <Card.Title> {Element.title}</Card.Title>
                    <Card.Text>{Element.text}</Card.Text>
                    <Card.Title> {Element.price}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup className="card-group">
              {celulares.map((Element) => (
                <Card className="text-center card" key={Element.id}>
                  <Card.Img src={Element.img} alt="logo" />
                  <Card.Body>
                    <Card.Title> {Element.title}</Card.Title>
                    <Card.Text>{Element.text}</Card.Text>
                    <Card.Title> {Element.price}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup className="card-group">
              {celulares.map((Element) => (
                <Card className="text-center card" key={Element.id}>
                  <Card.Img src={Element.img} alt="logo" />
                  <Card.Body>
                    <Card.Title> {Element.title}</Card.Title>
                    <Card.Text>{Element.text}</Card.Text>
                    <Card.Title> {Element.price}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
