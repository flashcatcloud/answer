import { FC } from 'react';
import { Link } from 'react-router-dom';

import AdImg from '@/assets/images/flashduty.jpg';
import './index.scss';

const FcAd: FC = () => {
  return (
    <div className="mb-4">
      <Link
        to="https://console.flashcat.cloud?from=answer"
        target="_blank"
        title="Flashcat：让监控分析变简单">
        <img src={AdImg} alt="Flashcat：让监控分析变简单" className="ad-img" />
      </Link>
    </div>
  );
};

export default FcAd;
