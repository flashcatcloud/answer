import { FC } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const effectImgMap = {
  slide_from_right: 'https://download.flashcat.cloud/answer.flashduty1.jpg',
  grow: 'https://download.flashcat.cloud/answer.flashduty2.jpg',
  flip: 'https://download.flashcat.cloud/answer.flashduty3.jpg',
  slide_from_left: 'https://download.flashcat.cloud/answer.flashduty4.jpg',
  shrink: 'https://download.flashcat.cloud/answer.flashduty5.jpg',
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
