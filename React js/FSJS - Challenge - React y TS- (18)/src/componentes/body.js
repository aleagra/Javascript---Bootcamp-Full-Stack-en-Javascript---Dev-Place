import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Carousel from 'react-bootstrap/Carousel';

export function GroupExample() {

  
   let celulares= [
      {
      id: 1,
      title: "Samsung Galaxy S22 ULTRA  ",
      text: "text",
      price:"$200.000",
      img:"https://samsungar.vtexassets.com/arquivos/ids/177924-800-auto?width=800&height=auto&aspect=true",
      procuto:'celular'
    },
    {
      id: 2,
      title: "Samsung Galaxy S20 FE",
      text: "text",
      price:"$150.000",
      img:"https://samsungar.vtexassets.com/arquivos/ids/180584-800-auto?width=800&height=auto&aspect=true",
      procuto:'celular'
    },
    {
        id: 3,
        title: "Samsung Galaxy A33 ",
        text: "text",
        price:"$90.000",
        img:"https://samsungar.vtexassets.com/arquivos/ids/182150-800-auto?width=800&height=auto&aspect=true",
        procuto:'celular'
      },
      {
        id: 4,
        title: "Samsung Galaxy A53 ",
        text: "text",
        price:"$80.000",
        img:"https://samsungar.vtexassets.com/arquivos/ids/182179-800-auto?width=800&height=auto&aspect=true",
        procuto:'celular'
      },
      {
        id: 5,
        title: "Samsung Galaxy S22+",
        text: "text",
        price:"$70.000",
        img:"https://samsungar.vtexassets.com/arquivos/ids/177924-800-auto?width=800&height=auto&aspect=true",
        procuto:'celular',
      
      }
  ];
  let tablet = [
    {
      id: 1,
      title: "Galaxy Tab S8 Ultra ",
      text: "text",
      price:"$200.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-tab-s8-ultra-wifi-x900-sm-x900nzadaro-530922091?$684_547_PNG$"
    },
    {
      id: 2,
      title: "Galaxy Tab S8+",
      text: "text",
      price:"$150.000",
      img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-t733nzkraro/gallery/ar-galaxy-tab-s7-fe-t730-392264-sm-t733nzkraro-532939742?$684_547_PNG$"
    },
    {
        id: 3,
        title: "Galaxy Tab S8",
        text: "text",
        price:"$90.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-t500nzaearo/gallery/ar-galaxy-tab-a7-t500-sm-t500nzaearo-332818011?$1300_1038_PNG$"
      },
      {
        id: 4,
        title: "Galaxy Tab A7 ",
        text: "text",
        price:"$80.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-tab-s8-plus-wifi-x800-sm-x800nzavaro-530921460?$684_547_PNG$"
      },
      {
        id: 5,
        title: "Galaxy Tab S6 Lite",
        text: "text",
        price:"$70.000",
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-p613nzauaro/gallery/ar-galaxy-tab-s6-lite-p610-432945-sm-p613nzauaro-533369962?$1300_1038_PNG$"
      },]
  return (
    <>
     

      

      <div>
        <div className="general">
          <img
            src="https://images.samsung.com/is/image/samsung/p6pim/ar/qn65q80aagczb/gallery/ar-qled-tv-qn65q80aagczb-front-silver-531921679?$1300_1038_PNG$"
            alt=""
          />
          <div className="container-text">
            <h1 className="title"> TITLE</h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim non
              fugit accusantium deserunt totam ipsa at omnis esse autem ducimus
              nesciunt sit sed quia rem facere, corrupti possimus consequuntur
              facilis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus numquam rerum assumenda dolores sit quis magni
              praesentium, voluptatum similique aliquam vero iure veniam
              repellat, in autem velit? Fuga, sint consequuntur. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Atque consequatur
              eveniet fuga, labore sunt nostrum aut cupiditate eius architecto
              dolor! Sed eius ipsam pariatur, adipisci maiores nulla aut nihil
              ab.
            </p>
          </div>
        </div>
      </div>

      <Carousel className="mb-5">
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
        {tablet.map((Element) => (
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
    </>
  );
}
