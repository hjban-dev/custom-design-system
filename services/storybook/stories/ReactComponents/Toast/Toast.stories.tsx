import "@custom-design-system/react-components-button/style.css";
import { Button } from "@custom-design-system/react-components-button";
import React from "react";

import {
  ToastProvider,
  useToast,
} from "@custom-design-system/react-components-toast";
import "@custom-design-system/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
