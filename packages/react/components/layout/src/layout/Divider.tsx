import * as React from "react";
import { DividerProps  } from "./types";  
import { vars } from "@custom-design-system/themes";

const Divider = (props: DividerProps, ref: React.Ref<HTMLHRElement>) => {
  const {
    color = 'gray', 
    variant = 'solid', 
    orientation = 'horizontal',
    size = 1 
  } = props;

  const borderStyle = orientation === 'horizontal' ? {
    width: '100%',
    borderWidth: `0 0 ${size}px 0`,
  } : {
    height: '100%',
    borderWidth: `0 0 0 ${size}px`,
  };

  return <hr {...props} ref={ref} style={{
    borderStyle: variant,
    borderColor: vars.colors.$scale?.[color]?.[700] ?? color,
    ...borderStyle,
    ...props.style,
  }} />
}

const _Divider = React.forwardRef(Divider);
export { _Divider as Divider }
