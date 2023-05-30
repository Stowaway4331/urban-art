import bg1 from "../assets/images/gap-1-bg.webp";
import bg2 from "../assets/images/gap-2-bg.webp";

const Gap = (props) => {
  const images = [bg1, bg2];

  const img = new Image();
  img.src = images[props.img];

  return (
    <div
      className="Gap"
      style={{
        height: img.height / 16 - 10 + "em",
        width: "100%",
        overflow: "hidden",
        perspective: "10em",
        perspectiveOrigin: "50% calc(50% - 3em)",
      }}
    >
      <div
        className="parallax"
        id="parallax-element"
        style={{
          backgroundImage: `url("${images[props.img]}")`,
          width: "100%",
          height: img.height,
          // height: img.height / 16 - 10 + "em",
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      />
    </div>
  );
};

export default Gap;
