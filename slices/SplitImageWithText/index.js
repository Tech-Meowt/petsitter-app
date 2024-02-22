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

const spaceAbove = {
  Yes: 'mt-12',
  No: 'mt-0',
};

const spaceBelow = {
  Yes: 'mb-12',
  No: 'mb-0',
};

const textAlign = {
  Center: 'text-center',
  Left: 'text-left',
  Right: 'text-right',
};

const SplitImageWithText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`${slice.primary.background_color ? backgroundColor[slice.primary.background_color] : backgroundColor.White} ${slice.primary.add_space_above ? spaceAbove[slice.primary.add_space_above] : ''} ${slice.primary.add_space_below ? spaceBelow[slice.primary.add_space_below] : ''} ${slice.primary.text_align ? textAlign[slice.primary.text_align] : ''} flex justify-center items-center mx-auto`}
      >
        {['default', 'imageRight'].includes(slice.variation) && (
          <div className='container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px]'>
            <PrismicNextImage
              field={slice.primary.image}
              className={`w-3/4 h-auto rounded-3xl my-12 ${
                ['default'].includes(slice.variation)
                  ? 'justify-self-start'
                  : 'md:order-last justify-self-end'
              }`.trim()}
              alt=''
            />
            <div className='flex flex-col gap-4 items-start'>
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>
        )}
        {['textWithMultipleImages'].includes(slice.variation) && (
          <div className='m-12'>
            <div className='flex flex-col justify-center items-center min-h-[512px]'>
              <PrismicRichText field={slice.primary.text} />
              <ul className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                {slice.items.map((item) => (
                    <PrismicNextImage
                      field={item.image}
                      key={item.image}
                      className='aspect-[3/2] w-full h-auto rounded-2xl object-cover'
                      alt=''
                    />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SplitImageWithText;
