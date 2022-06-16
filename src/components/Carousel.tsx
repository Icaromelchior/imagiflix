import React from 'react';
import Slick from 'react-slick';


import Mockdata,{Movie} from '../data/mock';

interface CarouselData {
  title?: string;
  data?:Movie[];
}

const Poster = ({cover, title}:Movie,index:number ) => (
  <article key={index}>
    <img src={cover} alt={title} />
  </article>
);
const Carousel = ({title= 'Films em destaque', data = Mockdata}:CarouselData) => {
  const options = {
    infinity: true,
    slidesToScroll: 1,
    variablesWidht: true, 
  };
  return(
    <section>
      <h2>{title}</h2>
      <Slick {...options}>{data.map( (movie,index)  => Poster(movie,index))}</Slick>
    </section>
  );
};

export default Carousel;