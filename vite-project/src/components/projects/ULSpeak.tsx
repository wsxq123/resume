import ULSpeakPng01 from '@assets/projects/ULSpeak-1.png';
import ULSpeakPng02 from '@assets/projects/ULSpeak-2.png';
import PicOnlyTemp from '@components/projects/PicOnlyTemp';

function ULSpeak() {
  const picList = [ULSpeakPng01, ULSpeakPng02];

  return <PicOnlyTemp picList={picList} />;
}

export default ULSpeak;
