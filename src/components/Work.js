import React from 'react';
import BackgroundImage from '../images/Vector.svg';
import Work1 from '../images/Work1.svg';
import Work2 from '../images/Work2.svg';
import Work3 from '../images/Work3.svg';
import Work4 from '../images/Work4.svg';
import ArtImage from '../images/picture-dynamic-color.svg';
import PaintBrush from '../images/paint-brush-dynamic-color.svg';
import Rocket from '../images/rocket-dynamic-color.svg';
import Button from './Button';
import SectionTitle from './SectionTitle';

function Work() {
  return (
    <section
      className="bg-white px-8 py-11 bg-contain bg-no-repeat bg-left-bottom"
      id="work"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="container mx-auto grid gap-14">
        <SectionTitle
          title="Work"
          color="orange"
          borderColor="#F75603"
          borderGapColor="#ffffff"
          textAlign="left"
        />
        <div className="grid lg:grid-cols-3 lg:gap-7 gap-10">
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-7">
            <div className="md:col-span-2 grid md:grid-cols-2 gap-7 place-items-center">
              <img src={Work1} className="cursor-pointer" />
              <img src={Work2} className="cursor-pointer" />
            </div>
            <div className="md:col-span-2 grid md:grid-cols-2 gap-7 place-items-center">
              <img src={Work3} className="cursor-pointer" />
              <img src={Work4} className="cursor-pointer" />
            </div>
          </div>
          <div className="grid lg:grid-rows-1 place-items-center">
            <div className="relative place-self-center row-span-1 hidden lg:block">
              <div className="absolute top-36 left-48 h-[135px] w-[135px]">
                <img src={Rocket} className="h-full w-full" />
              </div>
              <div>
                <img src={ArtImage} />
              </div>
              <div className="absolute top-0">
                <img src={PaintBrush} />
              </div>
            </div>
            <div>
              <Button>View all Projects</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
