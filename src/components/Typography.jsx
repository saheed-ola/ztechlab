import React from 'react'

    const Typography = ({ variant, children, ...rest }) =>
        {
      const Component = `h${variant}`;
    
      return <Component {...rest}>{children}</Component>;
    };
  
export default Typography