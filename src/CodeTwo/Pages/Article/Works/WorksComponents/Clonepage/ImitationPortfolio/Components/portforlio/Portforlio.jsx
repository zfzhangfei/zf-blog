import React, { useRef } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://image.meiye.art/pic__idgX-hNCqkMwNTKjmfCf?imageMogr2/thumbnail/560x/interlace/1",
    desc: "I am a bookworm, and I love reading books. One of my favorite books is 'The Alchemist' by Paulo Coelho. ",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://image.meiye.art/pic__idgX-hNCqkMwNTKjmfCf?imageMogr2/thumbnail/560x/interlace/1",
    desc: "I am a bookworm, and I love reading books. One of my favorite books is 'The Alchemist' by Paulo Coelho. ",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://image.meiye.art/pic__idgX-hNCqkMwNTKjmfCf?imageMogr2/thumbnail/560x/interlace/1",
    desc: "I am a bookworm, and I love reading books. One of my favorite books is 'The Alchemist' by Paulo Coelho. ",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://image.meiye.art/pic__idgX-hNCqkMwNTKjmfCf?imageMogr2/thumbnail/560x/interlace/1",
    desc: "I am a bookworm, and I love reading books. One of my favorite books is 'The Alchemist' by Paulo Coelho. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300,300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portforlio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portforlio;
