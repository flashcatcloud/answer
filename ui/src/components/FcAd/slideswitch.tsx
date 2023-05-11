import { FC } from 'react';
import { Link } from 'react-router-dom';

import fadeInImg from '@/assets/images/flashduty.jpg';
import './index.scss';

const effectImgMap = {
  fade_in: fadeInImg,
  slide_from_left: fadeInImg,
  flip: fadeInImg,
  grow: fadeInImg,
  shrink: fadeInImg,
};

export type IEffect = keyof typeof effectImgMap;

interface IProps {
  effect: IEffect;
}

const SliderSwitch: FC<IProps> = (props) => {
  const { effect } = props;
  return (
    <div>
      <div className="slideswitch">
        <div className={`content ${effect}`}>
          <Link
            to="https://flashcat.cloud/product/flashduty/?from=answer"
            target="_blank"
            title="Flashcat：让监控分析变简单">
            <img src={effectImgMap[effect]} alt="Flashcat：让监控分析变简单" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderSwitch;
