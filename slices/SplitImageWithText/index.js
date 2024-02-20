import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.ImageLeftTextRightSlice} ImageLeftTextRightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageLeftTextRightSlice>} ImageLeftTextRightProps
 * @param {ImageLeftTextRightProps}
 */

const backgroundColor = {
  Purple: 'bg-purpleDefault text-white',
  Lavender: 'bg-lavender text-purpleDefault',
};

const ImageLeftTextRight = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`${slice.primary.background_color ? backgroundColor[slice.primary.background_color] : backgroundColor.White} flex justify-center items-center w-screen`}
      >
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] p-14'>
          <PrismicNextImage
            field={slice.primary.image}
            className={`w-full h-auto rounded-3xl ${
              ['default'].includes(slice.variation) ? '' : 'md:order-last'
            }`.trim()}
            alt=''
          />

          <div className='flex flex-col gap-4 items-start'>
            <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftTextRight;
