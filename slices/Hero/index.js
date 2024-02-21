import { PrismicNextImage } from '@prismicio/next';
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

const spaceAbove = {
  Yes: 'mt-12',
  No: 'mt-0',
};

const spaceBelow = {
  Yes: 'mb-12',
  No: 'mb-0',
};

const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex justify-center items-center mx-auto'
    >
      <div className={`${slice.primary.add_space_above ? spaceAbove[slice.primary.add_space_above] : ''} ${slice.primary.add_space_below ? spaceBelow[slice.primary.add_space_below] : ''} items-center w-screen`}>
        <div
          className={`${slice.primary.add_space_above ? spaceAbove[slice.primary.add_space_above] : ''} ${slice.primary.add_space_below ? spaceBelow[slice.primary.add_space_below] : ''} items-center w-screen`}
        >
          <PrismicNextImage
            field={slice.primary.hero_image}
            className='w-screen'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
