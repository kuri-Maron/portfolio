import React, { useState, useMemo, useRef } from "react";
import { SimpleRope, useTick } from "@inlet/react-pixi";
import { Point } from "@pixi/math";
import imgBlackCatTail from "../../assets/blackCat_tail2.png";

const height = 50;
const ropeLength = 18;

const Tail = () => {
  const i = useRef(0);

  const initialPoints = useMemo(() => {
    const points = [];
    for (let k = 0; k < 10; k++) points.push(new Point(k * ropeLength, 0));
    return points;
  }, []);

  const [points, setPoints] = useState(initialPoints);

  useTick((delta) => {
    const iter = (i.current += 0.1 * delta);
    const np = [...points];

    for (let j = 0; j < np.length; j++) {
      np[j].x = j * ropeLength + Math.cos(j * 0.3 + iter) * 20;
      np[j].y = Math.sin(j * 0.4 + iter) * 25;
    }

    setPoints(np);
  });

  return (
    <SimpleRope
      image={imgBlackCatTail}
      points={points}
      scale={0.3}
      x={5}
      y={height / 2}
    />
  );
};

export default Tail;
