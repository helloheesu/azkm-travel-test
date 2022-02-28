import { RefObject, useCallback, useEffect } from 'react';

type Size = {
  width: number;
  height: number;
};
const waitForImage = (url: string, size?: Size) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    if (size) {
      img.width = size.width;
      img.height = size.height;
    }
    img.src = url;
  });
};

interface Props {
  canvasRef: RefObject<HTMLCanvasElement>;
  patterImgSrc: string;
  characterImgSrc: string;
}
const Downloader = ({ canvasRef, patterImgSrc, characterImgSrc }: Props) => {
  const waitAndDraw = useCallback(
    async (ctx: CanvasRenderingContext2D) => {
      const [patternIconImg, characterImg] = await Promise.all([
        waitForImage(patterImgSrc),
        waitForImage(characterImgSrc),
      ]);
      const pattern = ctx.createPattern(patternIconImg, 'repeat')!;
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, 2000, 2000);
      ctx.globalAlpha = 1.0;
      ctx.drawImage(characterImg, 0, 200);
    },
    [characterImgSrc, patterImgSrc]
  );

  useEffect(() => {
    if (!canvasRef || !canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.rect(0, 0, 2000, 2000);
      ctx.fillStyle = '#fffeea';
      ctx.fill();

      waitAndDraw(ctx);
    }
  }, [canvasRef, waitAndDraw]);

  return (
    <canvas
      style={{
        position: 'absolute',
        display: 'none',
      }}
      ref={canvasRef}
      width={2000}
      height={2000}
    />
  );
};

export default Downloader;
