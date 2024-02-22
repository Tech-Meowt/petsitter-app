import { PrismicRichText } from '@prismicio/react';
import Button from '@/app/components/Button';
/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param {TextBlockProps}
 */

const backgroundColor = {
  Purple: 'bg-purpleDefault text-white',
  Lavender: 'bg-lavender text-purpleDefault',
  White: 'bg-white text-purpleDefault'
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

const buttonAlign = {
  Center: 'justify-center',
  Left: 'justify-start',
  Right: 'justify-end',
}

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
          {['default'].includes(slice.variation) && (
            <PrismicRichText field={slice.primary.text} />
          )}
          {['textGridWithHeading', 'textGridWithButton'].includes(
            slice.variation
          ) && (
            <div>
              <PrismicRichText field={slice.primary.heading_text} />
              <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                {slice.items.map((item) => (
                  <div
                    className={`${item.grid_item_text_align ? textAlign[item.grid_item_text_align] : textAlign.Center}`}
                  >
                    <PrismicRichText
                      field={item.grid_item_text}
                      key={item.grid_item_text}
                    />
                  </div>
                ))}
              </div>

              <div className={`flex ${slice.primary.button_align ? buttonAlign[slice.primary.button_align] : buttonAlign.center}`}>
                {['textGridWithButton'].includes(slice.variation) && (
                  <div
                    className={`mt-10 ${slice.primary.button_align ? textAlign[slice.primary.button_align] : textAlign.Center}`}
                  >
                    <Button
                      label={slice.primary.button_text}
                      link={slice.primary.button_link}
                      buttonColor={slice.primary.button_color ? backgroundColor[slice.primary.button_color] : backgroundColor.White}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextBlock;