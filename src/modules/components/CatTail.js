import React, { useState, useMemo, useRef } from "react";
import { SimpleRope, Container, useTick } from "@inlet/react-pixi";
import { Point } from "@pixi/math";
// import { SimpleRope, Graphics, Container, useTick } from "@inlet/react-pixi";

import imgBlackCatTail from "../../assets/blackCat_tail2.png";

const height = 50;
const ropeLength = 18;

const Tail = () => {
  const i = useRef(0);

  const initialPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < 10; i++) points.push(new Point(i * ropeLength, 0));
    return points;
  }, []);

  // const [showPoints, setShowPoints] = useState(true);
  const [points, setPoints] = useState(initialPoints);

  useTick((delta) => {
    const iter = (i.current += 0.1 * delta);
    const np = [...points];

    for (let j = 0; j < np.length; j++) {
      np[j].x = j * ropeLength + Math.cos(j * 0.3 + iter) * 20;
      np[j].y = Math.sin(j * 0.5 + iter) * 30;
    }

    setPoints(np);
  });

  return (
    // <Container
    //   interactive={true}
    // pointerdown={() => setShowPoints((show) => !show)}
    // >
    <SimpleRope
      image={imgBlackCatTail}
      points={points}
      scale={0.3}
      x={5}
      y={height / 2}
    />
    //    {showPoints && <TailPoints points={points} />}
    // </Container>
  );
};

export default Tail;

// const TailPoints = ({ points }) => {
//   return (
//     <Graphics
//       x={0}
//       y={height / 2}
//       scale={0.4}
//       draw={(g) => {
//         g.clear();
//         g.lineStyle(2, 0xffc2c2);
//         g.moveTo(points[0].x, points[0].y);

//         for (let i = 1; i < points.length; i++) {
//           g.lineTo(points[i].x, points[i].y);
//         }

//         for (let i = 1; i < points.length; i++) {
//           g.beginFill(0xff0022);
//           g.drawCircle(points[i].x, points[i].y, 10);
//           g.endFill();
//         }
//       }}
//     />
//   );
// };
