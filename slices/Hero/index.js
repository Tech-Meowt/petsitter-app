import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex justify-center items-center mx-auto'
    >
      <div className='items-center w-screen'>
        <PrismicNextImage
          field={slice.primary.hero_image}
          className='w-screen'
        />
      </div>
    </section>
  );
};

export default Hero;
