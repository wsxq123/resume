import PicOnlyTemp from '@components/projects/PicOnlyTemp';
import weibaoPng01 from '@assets/projects/weibao-1.png';
import weibaoPng02 from '@assets/projects/weibao-2.png';
import weibaoPng03 from '@assets/projects/weibao-3.png';
import weibaoPng04 from '@assets/projects/weibao-4.png';
import weibaoPng05 from '@assets/projects/weibao-5.png';

function Weibao() {
  const picList = [
    weibaoPng01,
    weibaoPng02,
    weibaoPng03,
    weibaoPng04,
    weibaoPng05,
  ];

  return <PicOnlyTemp picList={picList} darkBg={false} />;
}

export default Weibao;
