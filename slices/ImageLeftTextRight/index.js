/**
 * @typedef {import("@prismicio/client").Content.ImageLeftTextRightSlice} ImageLeftTextRightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageLeftTextRightSlice>} ImageLeftTextRightProps
 * @param {ImageLeftTextRightProps}
 */
const ImageLeftTextRight = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_left_text_right (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ImageLeftTextRight;
