import { PrismicRichText } from '@prismicio/react';
/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param {TextBlockProps}
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


const TextBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`${slice.primary.background_color ? backgroundColor[slice.primary.background_color] : backgroundColor.White} ${slice.primary.add_space_above ? spaceAbove[slice.primary.add_space_above] : ''} ${slice.primary.add_space_below ? spaceBelow[slice.primary.add_space_below] : ''} ${slice.primary.text_align ? textAlign[slice.primary.text_align] : ''} w-screen`}
      >
        <div className='min-h-[512px] flex flex-col mx-24 py-24'>
          <PrismicRichText field={slice.primary.text}/>
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
