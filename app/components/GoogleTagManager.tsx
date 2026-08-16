"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-K25DQZDB",
};

const GoogleTagManager = () => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return null;
};

export default GoogleTagManager;
