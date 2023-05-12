import { FC } from 'react';
import { Link } from 'react-router-dom';

import Flashduty1 from '@/assets/images/Flashduty1.jpg';
import Flashduty2 from '@/assets/images/Flashduty2.jpg';
import Flashduty3 from '@/assets/images/Flashduty3.jpg';
import Flashduty4 from '@/assets/images/Flashduty4.jpg';
import Flashduty5 from '@/assets/images/Flashduty5.jpg';
import './index.scss';

const effectImgMap = {
  slide_from_right: Flashduty1,
  slide_from_left: Flashduty2,
  flip: Flashduty3,
  grow: Flashduty4,
  shrink: Flashduty5,
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
