import { useState, useEffect } from "react";

const breakpoint = 1100;

const detectDevice = (): string => {
  return document.documentElement.getBoundingClientRect().width < breakpoint
    ? "mobile"
    : "desktop";
};

const useDetectDevice = (): string => {
  const [device, setDevice] = useState<string>(detectDevice());

  useEffect(() => {
    const handleResize = (): void => {
      setDevice(detectDevice());
    };
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDetectDevice;
