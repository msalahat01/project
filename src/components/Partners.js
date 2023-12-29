import Carousel from 'react-bootstrap/Carousel';

function Partners() {
  return (
    
        <Carousel variant="dark">
          <Carousel.Item>
            <img
            className="-block w-100px" 
              src={require('/home/al-salahat/Downloads/project/src/image/Coach.png')} alt="Black"
            />
            <Carousel.Caption >
              <h5 >Coach</h5>
              <p>Coach Mohammad, The personal coach with 100 trainees</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="-block w-100px" 
             src={require('/home/al-salahat/Downloads/project/src/image/Nutrition.jpg')} alt="Black"
            />
            <Carousel.Caption  >
              <h5>Nutrition</h5>
              <p style={{color:"#000000" }}>Dr Alma, A specialist in GYM food and nutrition.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="-block w-100px " 
               src={require('/home/al-salahat/Downloads/project/src/image/emptygym.jpeg')} alt="Black"
            />
            <Carousel.Caption >
              <h5>GYM</h5>
              <p>
                Astro GYM, One of the in the west
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default Partners;